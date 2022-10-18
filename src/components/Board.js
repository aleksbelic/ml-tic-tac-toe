import Square from './Square';

export default function Board(props) {
  function renderSquare(i) {
    return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />;
  }

  function renderRow(rowIndex) {
    return (
      <div className="board-row" key={`row_${rowIndex}`}>
        {renderSquare(rowIndex * 3)}
        {renderSquare(rowIndex * 3 + 1)}
        {renderSquare(rowIndex * 3 + 2)}
      </div>
    );
  }

  return [...Array(3).keys()].map(rowIndex => renderRow(rowIndex));
}
