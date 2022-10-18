import Square from './Square';

export default function Board(props) {
  function renderSquare(i) {
    return (
      <Square
        key={i}
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
      />
    );
  }

  function renderRow(rowIndex) {
    return (
      <div key={rowIndex} className="board-row">
        {[...Array(3).keys()].map(columnIndex =>
          renderSquare(rowIndex * 3 + columnIndex)
        )}
      </div>
    );
  }

  return [...Array(3).keys()].map(rowIndex => renderRow(rowIndex));
}
