export const useDragAndDrop = () => {
  // 드래그 시작시 실행
  // 드래그되는 카드의 상태를 표시하고 드래그 데이터 설정
  const handleDragStart = (e, { cardId, sourceColumnId }) => {
    const draggedCard = e.target;
    draggedCard.setAttribute("data-is-dragging", "true");

    e.dataTransfer.setData(
      "application/json",
      JSON.stringify({
        cardId,
        sourceColumnId,
      })
    );
  };

  // 드래그 끝날 때 실행(드래그 상태 초기화)
  const handleDragEnd = (e) => {
    e.target.setAttribute("data-is-dragging", "false");
  };

  // 드래그 중인 요소가 다른 요소 위를 지날 때 실행
  // 마우스 위치에 따라 위아래로 이동시키기
  const handleDragOver = (e) => {
    e.preventDefault();
    const card = e.target.closest("[data-card-id]");
    if (card && !card.getAttribute("data-is-dragging")) {
      const rect = card.getBoundingClientRect();
      const midY = rect.top + rect.height / 2;

      // 부드러운 이동 효과
      card.classList.add("card-transition");
      card.style.transform =
        e.clientY < midY ? "translateY(-8px)" : "translateY(8px)";
    }
  };

  // 드랍영역을 벗어나면 실행
  const handleDragLeave = (e) => {
    const card = e.target.closest("[data-card-id]");
    if (card) {
      card.style.transform = "none";

      // 이동이 끝나면 transition 클래스 제거
      setTimeout(() => {
        card.classList.remove("card-transition");
      }, 200);
    }
  };

  // 드랍시 실행
  // 위치 계산하고 정보 반환
  const handleDrop = (e, targetColumnId) => {
    e.preventDefault();

    document.querySelectorAll("[data-card-id]").forEach((card) => {
      card.style.transform = "none";
      card.classList.remove("card-transition");
    });

    try {
      const { cardId, sourceColumnId } = JSON.parse(
        e.dataTransfer.getData("application/json")
      );

      const targetCard = e.target.closest("[data-card-id]");
      const targetContainer = e.target
        .closest("[data-column-id]")
        ?.querySelector("[data-cards-container]");

      if (!targetContainer) return null;

      const cards = Array.from(targetContainer.children);
      let targetIndex;

      if (!targetCard) {
        // 컬럼의 마지막에 드롭하는 경우
        targetIndex = cards.length;
      } else {
        const rect = targetCard.getBoundingClientRect();
        const midY = rect.top + rect.height / 2;

        targetIndex = cards.indexOf(targetCard);
        if (e.clientY > midY) targetIndex += 1;

        // 같은 컬럼 내에서 드래그하는 경우, 드래그하는 카드의 원래 위치를 고려
        if (sourceColumnId === targetColumnId) {
          const sourceIndex = cards.findIndex(
            (card) => card.getAttribute("data-card-id") === cardId
          );
          if (sourceIndex < targetIndex) {
            targetIndex -= 1;
          }
        }
      }

      return {
        cardId,
        sourceColumnId,
        targetColumnId,
        targetIndex,
      };
    } catch (error) {
      console.error("Error handling drop:", error);
      return null;
    }
  };

  return {
    handleDragStart,
    handleDragEnd,
    handleDragOver,
    handleDragLeave,
    handleDrop,
  };
};
