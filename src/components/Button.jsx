const Button = ({ children, onShowFriend }) => {
  return (
    <button onClick={onShowFriend} className="button">
      {children}
    </button>
  );
};
export default Button;
