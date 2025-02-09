import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const TagPicker = ({ existingTags, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#E9ECEF");
  const colorPickerRef = useRef(null);

  const colors = [
    "#FFE8CC",
    "#FFD8D8",
    "#D8E8FF",
    "#E2FFD8",
    "#FFD8F8",
    "#E9ECEF",
    "#FFC9C9",
    "#D8F5FF",
    "#D9FBE8",
    "#F3D9FA",
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        colorPickerRef.current &&
        !colorPickerRef.current.contains(event.target)
      ) {
        setIsColorPickerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectColor = (color) => {
    setSelectedColor(color);
  };

  const handleAddTag = () => {
    if (searchTerm.trim()) {
      onSelect(searchTerm.trim(), selectedColor);
      setSearchTerm("");
      setSelectedColor("#E9ECEF");
      setIsColorPickerOpen(false);
    }
  };

  console.log(existingTags);

  return (
    <TagPickerContainer ref={colorPickerRef}>
      <InputWrapper>
        <InputContainer>
          <TagInput
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="태그 추가..."
            onKeyDown={(e) => {
              if (e.key === "Enter") handleAddTag();
            }}
          />
          <ButtonGroup>
            <ColorButton
              $color={selectedColor}
              onClick={() => setIsColorPickerOpen(!isColorPickerOpen)}
            >
              <ColorPreview $color={selectedColor} />
            </ColorButton>
            <AddButton onClick={handleAddTag}>추가</AddButton>
          </ButtonGroup>
        </InputContainer>
      </InputWrapper>

      {isColorPickerOpen && (
        <ColorDropdown>
          {colors.map((color) => (
            <ColorOption
              key={color}
              $color={color}
              $isSelected={color === selectedColor}
              onClick={() => handleSelectColor(color)}
            />
          ))}
        </ColorDropdown>
      )}
    </TagPickerContainer>
  );
};

export default TagPicker;

const TagPickerContainer = styled.div`
  position: relative;
  width: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
`;

const TagInput = styled.input`
  width: 100%;
  flex: 1;
  padding: 4px 8px;
  padding-right: 80px;
  border: 1px solid ${({ theme }) => theme.colors[theme.mode].border};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors[theme.mode].element.input};
  color: ${({ theme }) => theme.colors[theme.mode].text};

  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 4px 6px;
    padding-right: 70px;
  }
`;

const InputContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
`;

const ButtonGroup = styled.div`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: 4px;
`;

const AddButton = styled.button`
  padding: 2px 8px;
  border: none;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors[theme.mode].element.button};
  color: white;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    background: ${({ theme }) => theme.colors[theme.mode].element.buttonHover};
  }
`;

const ColorButton = styled.button`
  display: flex;
  align-items: center;
  padding: 2px;
  border: 1px solid ${({ theme }) => theme.colors[theme.mode].border};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors[theme.mode].background.primary};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors[theme.mode].background.tertiary};
  }
`;

const ColorPreview = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background-color: ${({ $color }) => $color};
`;

const ColorDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 4px;
  padding: 8px;
  background: ${({ theme }) => theme.colors[theme.mode].background.primary};
  border: 1px solid ${({ theme }) => theme.colors[theme.mode].border};
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.shadows[theme.mode]};
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 4px;
  z-index: 10;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ColorOption = styled.button`
  width: 24px;
  height: 24px;
  border: 2px solid
    ${({ $isSelected }) => ($isSelected ? "#000" : "transparent")};
  border-radius: 4px;
  background-color: ${({ $color }) => $color};
  cursor: pointer;
  padding: 0;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
