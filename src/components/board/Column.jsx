import { useColumn } from "../../hooks/useColumn";
import ColumnView from "./ColumnView";

const Column = (props) => {
  const { isDefaultColumn, isEditingTitle, editedTitle, actions } =
    useColumn(props);

  return (
    <ColumnView
      {...props}
      isDefaultColumn={isDefaultColumn}
      isEditingTitle={isEditingTitle}
      editedTitle={editedTitle}
      actions={actions}
    />
  );
};

export default Column;
