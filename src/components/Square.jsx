import propTypes from "prop-types";
// import './Square.sass';
import { IconCircle, IconX } from "@tabler/icons-react";

function Square({ value, onSquareClick }) {
  Square.propTypes = {
    value: propTypes.string,
    onSquareClick: propTypes.func,
    fontColor: propTypes.string,
  };
  let icon = "";
  if (value == null) {
    icon = null;
  } else if (value == "X") {
    icon = <IconX color="#EF3E36" size="36" />;
  } else {
    icon = <IconCircle color="#F9C639" size="31"/>;
  }
  return (
    <button
      className="neumorphic-shadow-inset m-1 flex h-20  w-20 items-center justify-center rounded-lg font-display text-[length:38px] tracking-tighter"
      onClick={onSquareClick}
    >
      {icon}
    </button>
  );
}

export default Square;
