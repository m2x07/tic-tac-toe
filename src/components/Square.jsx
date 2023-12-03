import propTypes from "prop-types";
// import './Square.sass';

function Square({ value, onSquareClick }) {
  Square.propTypes = {
    value: propTypes.string,
    onSquareClick: propTypes.func,
    fontColor: propTypes.string,
  };

  return (
    <button
      className="neumorphic-shadow-inset m-1 h-20 w-20 items-center justify-center rounded-lg font-display text-[length:38px] tracking-tighter"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default Square;
