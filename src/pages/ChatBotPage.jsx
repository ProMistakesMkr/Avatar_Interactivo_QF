import { Fragment } from "react";
import styles from "./ChatBotPage.module.css";
import ChatBot from "../components/ChatBot/ChatBot";

const ChatBotPage = () => {
  return (
    <Fragment>
      <main className={styles.main}>
        <div className={styles.left}>
          <div className={styles["left-info"]}>
            <h2>Test</h2>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles["right-info"]}>
            <h1>Bienvenido...</h1>
            <p>
              En este Chat Bot encontrarás las respuestas a tus preguntas. Si
              deseas saber la fuente de la información que te estamos
              proporcionando, haz click en la información.
            </p>
          </div>
          <ChatBot />
        </div>
      </main>
    </Fragment>
  );
};

export default ChatBotPage;
