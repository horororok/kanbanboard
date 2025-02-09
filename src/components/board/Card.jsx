import { useCard } from "../../hooks/useCard";
import CardView from "./CardView";

const Card = (props) => {
  const { state, actions } = useCard(props);

  return <CardView {...props} state={state} actions={actions} />;
};

export default Card;
