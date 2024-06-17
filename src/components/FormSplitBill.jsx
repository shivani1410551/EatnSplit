import Button from "./Button";
import { useState } from "react";
const FormSplitBill = ({ selectedFriend, onSplitBill }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }
  return (
    <form onSubmit={handleSubmit} className="formSplitBill">
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>
        Bill value
        <input
          type="text"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />
      </label>
      <label>
        Your expenses
        <input
          type="text"
          value={paidByUser}
          onChange={(e) =>
            setPaidByUser(
              Number(e.target.value) > bill
                ? paidByUser
                : Number(e.target.value)
            )
          }
        />
      </label>
      <label>
        {selectedFriend.name} expenses
        <input type="text" disabled value={paidByFriend} />
      </label>
      <label>
        Who is paying the bill?
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
