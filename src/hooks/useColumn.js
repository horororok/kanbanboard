import { useState } from "react";
import { DEFAULT_COLUMN_IDS } from "../constants/board";

export const useColumn = ({ id, columnTitle, onTitleChange, onCardAdd }) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [editedTitle, setEditedTitle] = useState(columnTitle);

  const isDefaultColumn = DEFAULT_COLUMN_IDS.includes(id);

  const handleTitleSave = () => {
    onTitleChange(id, editedTitle);
    setIsEditingTitle(false);
  };

  const handleTitleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleTitleSave();
    } else if (e.key === "Escape") {
      setEditedTitle(columnTitle);
      setIsEditingTitle(false);
    }
  };

  const handleAddCard = () => {
    const newCard = {
      id: `card-${Date.now()}`,
      description: "새 카드",
      tags: [],
    };
    onCardAdd(id, newCard);
  };

  return {
    isDefaultColumn,
    isEditingTitle,
    editedTitle,
    actions: {
      setIsEditingTitle,
      setEditedTitle,
      handleTitleSave,
      handleTitleKeyDown,
      handleAddCard,
    },
  };
};
