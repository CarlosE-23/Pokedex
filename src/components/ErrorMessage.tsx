import "./ErrorMessage.style.css";

type TProps = {
  error: string;
  message: string;
  action: (e: React.MouseEvent) => void;
};

function ErrorMessage(props: TProps) {
  const { error, message, action } = props;
  return (
    <div className="error">
      <p>
        {error}.{" "}
        <span className="message-link" onClick={action}>
          {message}
        </span>
      </p>
    </div>
  );
}

export default ErrorMessage;
