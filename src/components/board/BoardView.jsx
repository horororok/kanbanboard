import styled from "styled-components";
import Column from "./Column";

const BoardView = ({ board, actions, dragHandlers }) => {
  return (
    <Container>
      <BoardContainer>
        <BoardHeader>
          <TitleInput
            type="text"
            value={board.projectTitle}
            onChange={(e) => actions.updateProjectTitle(e.target.value)}
          />
        </BoardHeader>

        <ColumnsContainer onDragOver={dragHandlers.handleDragOver}>
          {board.columns.map((column) => (
            <Column
              key={column.id}
              {...column}
              onTitleChange={actions.updateColumnTitle}
              onDelete={actions.deleteColumn}
              onCardAdd={actions.addCard}
              onCardDelete={actions.deleteCard}
              onCardUpdate={actions.updateCard}
              onDragStart={dragHandlers.handleDragStart}
              onDragEnd={dragHandlers.handleDragEnd}
              onDragLeave={dragHandlers.handleDragLeave}
              onDrop={actions.handleCardMove}
            />
          ))}
          <AddColumnContainer onClick={actions.handleColumnAdd}>
            <AddColumnText>Add Another List</AddColumnText>
          </AddColumnContainer>
        </ColumnsContainer>
      </BoardContainer>
    </Container>
  );
};

export default BoardView;

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const BoardContainer = styled.div`
  width: 100%;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  padding: 0 16px;

  @media screen and (max-width: 1024px) {
    max-width: 95%;
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    padding: 0 8px;
  }
`;

const BoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
`;

const TitleInput = styled.input`
  font-size: 24px;
  font-weight: bold;
  padding: 8px;
  border: 1px solid transparent;
  border-radius: 4px;
  background: transparent;
  color: ${({ theme }) => theme.colors[theme.mode].text};

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.colors[theme.mode].border};
    background: ${({ theme }) => theme.colors[theme.mode].element.input};
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
    padding: 4px;
  }
`;

const ColumnsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 8px 4px;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors[theme.mode].border};
    border-radius: 4px;
  }
`;

const AddColumnContainer = styled.div`
  background: ${({ theme }) => theme.colors[theme.mode].background.tertiary};
  border-radius: 8px;
  width: 150px;
  height: fit-content;
  margin-top: 15px;
  padding: 0 8px;
  flex-shrink: 0;
  cursor: pointer;
  opacity: 0.8;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 1;
    background: ${({ theme }) => theme.colors[theme.mode].background.tertiary};
  }
`;

const AddColumnText = styled.span`
  color: ${({ theme }) => theme.colors[theme.mode].secondary};
  font-size: 13px;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: "+";
    font-size: 20px;
  }
`;
