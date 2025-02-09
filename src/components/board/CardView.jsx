import styled from "styled-components";
import { dragAnimation } from "../../styles/animations";
import Tag from "../tag/Tag";
import TagPicker from "../tag/TagPicker";

const CardView = ({
  id,
  description,
  tags,
  state,
  actions,
  onDelete,
  onDragEnd,
  columnId,
}) => {
  const { isEditing, editDescription, isHovered } = state;

  return (
    <CardContainer
      draggable
      data-card-id={id}
      onDragStart={actions.handleDragStart}
      onDragEnd={onDragEnd}
      onMouseEnter={() => actions.setIsHovered(true)}
      onMouseLeave={() => actions.setIsHovered(false)}
    >
      <CardActions $isVisible={isHovered}>
        <IconButton onClick={() => actions.setIsEditing(true)}>
          <span>tag</span>
        </IconButton>
        <IconButton className="delete" onClick={() => onDelete(columnId, id)}>
          <span>✕</span>
        </IconButton>
      </CardActions>

      {tags.length > 0 && (
        <TagsContainer>
          {tags.map((tag) => (
            <Tag
              key={tag.name}
              name={tag.name}
              color={tag.color}
              onDelete={actions.handleRemoveTag}
            />
          ))}
        </TagsContainer>
      )}

      <CardContent>
        {isEditing ? (
          <textarea
            value={editDescription}
            onChange={(e) => actions.setEditDescription(e.target.value)}
            autoFocus
          />
        ) : (
          <p onClick={() => actions.setIsEditing(true)}>{description}</p>
        )}
      </CardContent>

      {isEditing && (
        <CardFooter>
          <TagPicker existingTags={tags} onSelect={actions.handleAddTag} />
          <EditActions>
            <Button onClick={actions.handleSave}>저장</Button>
            <Button onClick={() => actions.setIsEditing(false)}>취소</Button>
          </EditActions>
        </CardFooter>
      )}
    </CardContainer>
  );
};

export default CardView;

const CardContainer = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors[theme.mode].element.card};
  border-radius: 6px;
  padding: 12px;
  margin-bottom: 4px;
  box-shadow: ${({ theme }) => theme.shadows[theme.mode]};
  cursor: grab;
  transform: translate(0, 0);

  // 드래그 시작할 때의 애니메이션
  &[data-is-dragging="true"] {
    animation: ${dragAnimation} 0.2s ease;
    opacity: 0.8;
    cursor: grabbing;
  }

  // 드래그 중 다른 카드들의 이동 애니메이션
  &.card-transition {
    transition: transform 0.2s ease;
  }

  // 드래그가 끝나고 원래 위치로 돌아갈 때의 애니메이션
  &:not([data-is-dragging="true"]) {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows[theme.mode]} 0px 8px 16px;
  }

  &[data-is-dragging="true"] {
    opacity: 0.5;
  }

  @media screen and (max-width: 768px) {
    padding: 8px;
  }
`;

const CardActions = styled.div`
  position: absolute;
  top: -12px;
  right: -8px;
  display: flex;
  gap: 4px;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 0.2s ease;
  z-index: 1;
`;

const IconButton = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors[theme.mode].background.tertiary};
  color: ${({ theme }) => theme.colors[theme.mode].secondary};
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${({ theme }) => theme.shadows[theme.mode]};

  &:hover {
    background: ${({ theme }) => theme.colors[theme.mode].element.button};
    color: ${({ theme }) => theme.colors[theme.mode].element.buttonHover};
    transform: translateY(-2px);
  }

  &.delete:hover {
    background: ${({ theme }) => theme.colors[theme.mode].error};
  }

  span {
    font-size: 14px;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 8px;
  min-height: 24px;
`;

const CardContent = styled.div`
  textarea {
    width: 100%;
    min-height: 60px;
    padding: 8px;
    border: 1px solid ${({ theme }) => theme.colors[theme.mode].border};
    border-radius: 4px;
    background: ${({ theme }) => theme.colors[theme.mode].element.input};
    color: ${({ theme }) => theme.colors[theme.mode].text};
    resize: vertical;
  }

  p {
    color: ${({ theme }) => theme.colors[theme.mode].text};
    line-height: 1.5;
    cursor: pointer;
  }
`;

const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
`;

const EditActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 8px;
`;

const Button = styled.button`
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: ${({ theme }) => theme.colors[theme.mode].element.button};
  color: white;

  &:hover {
    background: ${({ theme }) => theme.colors[theme.mode].element.buttonHover};
  }
`;
