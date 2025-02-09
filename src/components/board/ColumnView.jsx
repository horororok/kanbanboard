import styled from "styled-components";
import { fadeIn, slideIn } from "../../styles/animations";
import Card from "./Card";

const ColumnView = ({
  id,
  columnTitle,
  cards,
  isDefaultColumn,
  isEditingTitle,
  editedTitle,
  actions,
  onDelete,
  onCardDelete,
  onCardUpdate,
  onDragStart,
  onDragEnd,
  onDragLeave,
  onDrop,
}) => {
  return (
    <ColumnContainer
      data-column-id={id}
      onDrop={(e) => onDrop(e, id)}
      onDragOver={(e) => e.preventDefault()}
      onDragLeave={onDragLeave}
    >
      <ColumnHeader>
        <HeaderLeft>
          {isEditingTitle ? (
            <TitleInput
              value={editedTitle}
              onChange={(e) => actions.setEditedTitle(e.target.value)}
              onBlur={actions.handleTitleSave}
              onKeyDown={actions.handleTitleKeyDown}
              autoFocus
            />
          ) : (
            <TitleWrapper>
              <h3>{columnTitle}</h3>
              {!isDefaultColumn && (
                <EditButton onClick={() => actions.setIsEditingTitle(true)}>
                  <span>✎</span>
                </EditButton>
              )}
            </TitleWrapper>
          )}
          <CardCount>{cards.length}</CardCount>
        </HeaderLeft>
        <ButtonContainer>
          {cards.length > 0 && (
            <AddCardIcon onClick={actions.handleAddCard}>+</AddCardIcon>
          )}
          {!isDefaultColumn && (
            <DeleteButton onClick={() => onDelete(id)}>X</DeleteButton>
          )}
        </ButtonContainer>
      </ColumnHeader>

      <CardsContainer data-cards-container>
        {cards.length > 0 ? (
          cards.map((card) => (
            <Card
              key={card.id}
              {...card}
              columnId={id}
              onDelete={onCardDelete}
              onUpdate={onCardUpdate}
              onDragStart={onDragStart}
              onDragEnd={onDragEnd}
            />
          ))
        ) : (
          <EmptyCardContainer onClick={actions.handleAddCard}>
            <EmptyCardMessage>지금 바로 추가해보세요.</EmptyCardMessage>
            <AddCardIcon>+</AddCardIcon>
          </EmptyCardContainer>
        )}
      </CardsContainer>
    </ColumnContainer>
  );
};

export default ColumnView;

const ColumnContainer = styled.div`
  background: ${({ theme }) => theme.colors[theme.mode].background.secondary};
  border-radius: 8px;
  width: 300px;
  min-height: 100px;
  padding: 16px;
  flex-shrink: 0;
  animation: ${slideIn} 0.3s ease;

  @media screen and (max-width: 768px) {
    width: 280px;
    padding: 12px;
  }

  @media screen and (max-width: 480px) {
    width: 260px;
    padding: 8px;
  }
`;

const ColumnHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 8px;
  border-bottom: 2px solid ${({ theme }) => theme.colors[theme.mode].border};

  h3 {
    font-weight: 500;
    color: ${({ theme }) => theme.colors[theme.mode].text};
  }

  @media screen and (max-width: 768px) {
    padding-bottom: 6px;

    h3 {
      font-size: 14px;
    }
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const EditButton = styled.button`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s ease;
  padding: 0;

  span {
    font-size: 14px;
    color: ${({ theme }) => theme.colors[theme.mode].secondary};
  }

  &:hover span {
    color: ${({ theme }) => theme.colors[theme.mode].element.buttonHover};
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;

  h3 {
    margin-right: 4px;
  }

  &:hover ${EditButton} {
    opacity: 1;
  }
`;

const TitleInput = styled.input`
  font-size: inherit;
  font-weight: 500;
  padding: 4px 8px;
  border: 1px solid ${({ theme }) => theme.colors[theme.mode].border};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors[theme.mode].element.input};
  color: ${({ theme }) => theme.colors[theme.mode].text};
  width: 150px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors[theme.mode].primary};
  }
`;

const CardCount = styled.span`
  background-color: ${({ theme }) =>
    theme.colors[theme.mode].background.tertiary};
  color: ${({ theme }) => theme.colors[theme.mode].secondary};
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  animation: ${fadeIn} 0.3s ease;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const AddCardIcon = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: ${({ theme }) => theme.colors[theme.mode].element.button};
  color: ${({ theme }) => theme.colors[theme.mode].text};
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  padding: 0;
  line-height: 1;

  &:hover {
    background: ${({ theme }) => theme.colors[theme.mode].element.buttonHover};
  }
`;

const DeleteButton = styled.button`
  padding: 4px 8px;
  background: ${({ theme }) => theme.colors[theme.mode].error};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

const CardsContainer = styled.div`
  min-height: 100px;
  padding: 8px 0;

  & > * {
    transition: all 0.2s ease;
  }
`;

const EmptyCardContainer = styled.div`
  border: transparent;
  box-shadow: ${({ theme }) => theme.shadows[theme.mode]};
  border-radius: 6px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: ${({ theme }) =>
    theme.colors[theme.mode].background.primary};
  opacity: 0.6;
  gap: 8px;

  &:hover {
    background: ${({ theme }) => theme.colors[theme.mode].background.tertiary};
  }
`;

const EmptyCardMessage = styled.p`
  color: ${({ theme }) => theme.colors[theme.mode].secondary};
  font-size: 14px;
  text-align: center;
`;
