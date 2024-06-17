import "./style.scss";
import FormSplitBill from "./components/formSplitBill";
import Button from "./components/Button";
import { useState } from "react";
import FormAddFriend from "./components/FormAddFriend";
import FriendList from "./components/FriendList";
const initialFriends = [
  {
    id: 118234,
    name: "Clark",
    image: "https://i.pravatar.cc/48",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48",
    balance: 0,
  },
];
const App = () => {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [addFriend, setAddFriend] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  function handleShowAddFriend() {
    setShowAddFriend((prev) => !prev);
  }
  function handleAddFriend(friend) {
    setAddFriend((addFriend) => [...addFriend, friend]);
    setShowAddFriend(false);
  }
  function handleSelectFriend(friend) {
    setSelectedFriend((curr) => (curr?.id === friend?.id ? null : friend));
    setShowAddFriend(false);
  }
  function handleSplitBill(value) {
    setAddFriend((addFriend) =>
      addFriend.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : addFriend
      )
    );
    setSelectedFriend(null);
  }
  return (
    <div className="wrapper">
      <div className="sidebar">
        <FriendList
          addFriend={addFriend}
          onSelectedFriend={handleSelectFriend}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend === true ? "Close" : "Add Friend"}
        </Button>
        {selectedFriend && (
          <FormSplitBill
            selectedFriend={selectedFriend}
            onSplitBill={handleSplitBill}
          />
        )}
      </div>
    </div>
  );
};

export default App;
