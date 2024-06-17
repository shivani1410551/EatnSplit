import Button from "./Button";
import { useState } from "react";
const FormAddFriend = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newItem = {
      id,
      name,
      image: `${image}?= ${id}`,
      balance: 0,
    };
    onAddFriend(newItem);
    setImage("https://i.pravatar.cc/48");
    setName("");
  }
  return (
    <form className="formAddFriend" onSubmit={handleSubmit}>
      <label>
        Friend Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Image URL
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </label>
      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;
