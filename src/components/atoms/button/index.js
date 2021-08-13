import "./style.css";

const Button = ({ label, width }) => {
  return (
    <button style={{ width: width }} className="general_button">
      {label}
    </button>
  );
};

export { Button };
