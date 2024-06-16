import FormAddFriend from "./components/FormAddFriend";
import FriendList from "./components/FriendList";
import "./style.scss";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";
import { useState } from "react";
const initialFriends = [
  {
    id: 118234,
    name: "Clark",
    image: "/public/profileImg.jpg",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "/public/profileImg.jpg",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "/public/profileImg.jpg",
    balance: 0,
  },
];
function App() {
  const [showAddFriend, setShowAddFriend] = useState(true);
  const [friends, setFriend] = useState(initialFriends);
  const [selectedFriends, setSelectedFriends] = useState(null);
  function handleShowFriend() {
    setShowAddFriend((prev) => !prev);
  }
  function handleAddFriend(friend) {
    setFriend((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }
  function handleSelection(friend) {
    setSelectedFriends((curr) => (curr?.id == friend?.id ? null : friend));
    setShowAddFriend(false);
  }
  function handleSplitBill(value) {
    console.log(value);
  }
  return (
    <div className="wrapper">
      <div className="sidebar">
        <FriendList
          friends={friends}
          onSelection={handleSelection}
          selectedFriends={selectedFriends}
        />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

        <Button onClick={handleShowFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      {selectedFriends && (
        <FormSplitBill
          selectedFriends={selectedFriends}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

export default App;
