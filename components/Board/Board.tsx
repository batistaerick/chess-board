import Line from "../Line/Line";

function Board() {
  return (
    <div>
      <Line black={false} />
      <Line black={true} />
      <Line black={false} />
      <Line black={true} />
      <Line black={false} />
      <Line black={true} />
      <Line black={false} />
      <Line black={true} />
    </div>
  );
}

export default Board;
