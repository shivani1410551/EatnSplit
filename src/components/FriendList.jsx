import Friend from "./Friend";

const FriendList = ({ friends, onSelection, selectedFriends }) => {
  const friendsData = friends.map((friend) => {
    return (
      <Friend
        friend={friend}
        key={friend.id}
        onSelection={onSelection}
        selectedFriends={selectedFriends}
      />
    );
  });
  return <ul>{friendsData}</ul>;
};

export default FriendList;
