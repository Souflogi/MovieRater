const ToggleBtn = ({ children, className, action }) => {
  return (
    <button className={className} onClick={action}>
      {children}
    </button>
  );
};
export default ToggleBtn;
