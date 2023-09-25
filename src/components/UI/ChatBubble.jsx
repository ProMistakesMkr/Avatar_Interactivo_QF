import styles from "./ChatBubble.module.css";

const ChatBubble = ({ type, content }) => {
  return (
    <div className={styles[type]}>
      <p>{content}</p>
    </div>
  );
};

export default ChatBubble;
