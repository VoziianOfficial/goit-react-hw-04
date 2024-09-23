const ErrorMessage = ({ message }) => {
  return (
    <div style={{ color: "red", textAlign: "center", margin: "20px 0" }}>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
