import { useState } from "react";

export const useCard = ({
  id,
  description,
  tags,
  columnId,
  onUpdate,
  onDragStart,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editDescription, setEditDescription] = useState(description);
  const [isHovered, setIsHovered] = useState(false);

  const handleSave = () => {
    onUpdate(columnId, id, {
      description: editDescription,
      tags,
    });
    setIsEditing(false);
  };

  const handleAddTag = (newTag, color) => {
    if (!tags.includes(newTag)) {
      onUpdate(columnId, id, {
        description,
        tags: [...tags, { name: newTag, color }],
      });
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    onUpdate(columnId, id, {
      description,
      tags: tags.filter((tag) => tag.name !== tagToRemove),
    });
  };

  const handleDragStart = (e) => {
    onDragStart(e, { cardId: id, sourceColumnId: columnId });
  };

  return {
    state: {
      isEditing,
      editDescription,
      isHovered,
    },
    actions: {
      setIsEditing,
      setEditDescription,
      setIsHovered,
      handleSave,
      handleAddTag,
      handleRemoveTag,
      handleDragStart,
    },
  };
};
