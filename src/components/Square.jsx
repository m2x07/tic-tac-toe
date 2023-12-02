import propTypes from "prop-types";
import './Square.sass';

function Square({ value, onSquareClick }) {
  Square.propTypes = {
    value: propTypes.string,
    onSquareClick: propTypes.func,
    fontColor: propTypes.string
  };

  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;