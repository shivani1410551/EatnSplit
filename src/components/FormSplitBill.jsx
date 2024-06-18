import Button from "./Button";
import { useState } from "react";
const FormSplitBill = ({ selectedFriend }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPayedByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;
  }
  return (
    <form className="formSplitBill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>
        Bill Value
        <input
          type="text"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />
      </label>
      <label>
        Your expense
        <input
          type="text"
          value={paidByUser}
          onChange={(e) => setPayedByUser(Number(e.target.value))}
        />
      </label>
      <label>
        {selectedFriend.name} expense
        <input type="text" value={paidByFriend} disabled />
      </label>
      <label>
        Who is paying?
        <select
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(Number(e.target.value))}
        >
          <option value="user">You</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>
      </label>
      <Button>Split Bill</Button>
    </form>
  );
};

export default FormSplitBill;
