import Friend from "./Friend";
const FriendList = ({ addFriend, onSelection }) => {
  const Friends = addFriend.map((friend) => {
    return <Friend friend={friend} key={friend.id} onSelection={onSelection} />;
  });
  return <div>{Friends}</div>;
};

export default FriendList;
