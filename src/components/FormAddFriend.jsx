import Button from "./Button";
import { useState } from "react";
const FormAddFriend = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?= ${id}`,
      balance: 0,
    };
    onAddFriend(newFriend);
    console.log(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  }
  return (
    <form onSubmit={handleSubmit} className="formAddFriend">
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
