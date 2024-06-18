import "./style.scss";
import { useState } from "react";
import Button from "./components/Button";
import React from "react";
import FriendList from "./components/FriendList";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
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
  const [addFriend, setAddFriend] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleAddFriend(friend) {
    setAddFriend((addFriend) => [...addFriend, friend]);
    setShowAddFriend(false);
  }
  function handleShowAddFriend() {
    setShowAddFriend((friend) => !friend);
  }
  function handleSelection(friend) {
    setSelectedFriend(friend);
  }
  return (
    <div className="wrapper">
      <div className="sidebar">
        <FriendList
          addFriend={addFriend}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

        <Button onShowFriend={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>

      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
    </div>
  );
};
export default App;
