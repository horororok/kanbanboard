import styled from "styled-components";
import { useState } from "react";
import { fadeIn } from "../../styles/animations";

const Tag = ({ name, onDelete, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <TagContainer
      $color={color}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {name}
      {isHovered && (
        <DeleteButton onClick={() => onDelete(name)}>
          <span>×</span>
        </DeleteButton>
      )}
    </TagContainer>
  );
};

export default Tag;

const TagContainer = styled.span`
  position: relative;
  display: inline-block;
  padding: 2px 8px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  background-color: ${({ $color, theme }) =>
    $color || theme.colors[theme.mode].background.tertiary};
  color: ${({ theme }) => theme.colors[theme.mode].secondary};
  animation: ${fadeIn} 0.2s ease;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    padding: 2px 6px;
  }
`;

const DeleteButton = styled.button`
  position: absolute;
  top: -2px;
  right: -2px;
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors[theme.mode].error};
  color: white;
  cursor: pointer;
  font-size: 10px;
  padding: 0;
  line-height: 1;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
