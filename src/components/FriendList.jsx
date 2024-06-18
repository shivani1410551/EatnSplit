import Friend from "./Friend";
const FriendList = ({ addFriend, onSelection, selectedFriend }) => {
  const Friends = addFriend.map((friend) => {
    return (
      <Friend
        friend={friend}
        key={friend.id}
        addFriend={addFriend}
        onSelection={onSelection}
        selectedFriend={selectedFriend}
      />
    );
  });
  return <div>{Friends}</div>;
};

export default FriendList;
