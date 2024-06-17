import Button from "./Button";
const Friend = ({ item, onSelectedFriend, selectedFriend }) => {
  return (
    <li className={selectedFriend?.id === item.id ? "selected" : ""}>
      <img src={item.image} alt={item.name} />
      <h2 className="name">{item.name}</h2>
      {item.balance < 0 && (
        <p className="red">
          You owe {item.name} {item.balance}$
        </p>
      )}
      {item.balance > 0 && (
        <p className="green">
          {item.name} owe you {item.balance}$
        </p>
      )}
      {item.balance === 0 && <p>You and {item.name} are even.</p>}
      <Button onClick={() => onSelectedFriend(item)}>
        {selectedFriend?.id === item.id ? "Close" : "Select"}
      </Button>
    </li>
  );
};

export default Friend;
