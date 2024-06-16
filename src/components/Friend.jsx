import Button from "./Button";

const Friend = ({ friend, onSelection, selectedFriends }) => {
  const isSelected = selectedFriends?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h2 className="name">{friend.name}</h2>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {friend.balance}$
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owe you {friend.balance}$
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even.</p>}
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
};

export default Friend;
