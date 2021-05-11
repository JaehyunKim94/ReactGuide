function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map(function (number) {
    return <li key={number.toString()}>{number}</li>;
  });
  return <ul>{listItems}</ul>;
}

function ListItems(props) {
  // key 지정 X
  return <li>{props.value}</li>;
}

function ListAndKeys(props) {
  const numbers = [1, 2, 3, 4];
  const listItems = numbers.map(function (number) {
    // 배열 안에 key 지정
    return <ListItems key={number.toString()} value={number} />;
  });
  return (
    <div>
      <h1>08_ListAndKeys</h1>
      <NumberList numbers={numbers} />
      <div>
        <ul>{listItems}</ul>
      </div>
    </div>
  );
}

export default ListAndKeys;
