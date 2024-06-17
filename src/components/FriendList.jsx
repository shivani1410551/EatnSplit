import Friend from "./Friend";
const FriendList = ({ addFriend, onSelectedFriend, selectedFriend }) => {
  const FriendsList = addFriend.map((friend) => {
    return (
      <Friend
        item={friend}
        key={friend.id}
        addFriend={addFriend}
        onSelectedFriend={onSelectedFriend}
        selectedFriend={selectedFriend}
      />
    );
  });
  return <ul>{FriendsList}</ul>;
};

export default FriendList;
