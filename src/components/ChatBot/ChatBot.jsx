import { useState } from "react";
import questionData from "../../questionData.json";
import Button from "../UI/Button";
import ChatBubble from "../UI/ChatBubble";

const ChatBot = () => {
  const [conversation, setConversation] = useState([]);
  const [questions, setQuestions] = useState(questionData); // Asumiendo que questionData es importado

  const handleQuestionClick = (questionId) => {
    const selectedQuestion = questions.find((q) => q.id === questionId);
    setConversation((prev) => [
      ...prev,
      { type: "question", content: selectedQuestion.question },
      { type: "answer", content: selectedQuestion.answer },
    ]);
    setQuestions((prev) => prev.filter((q) => q.id !== questionId));
  };

  return (
    <div style={{ overflowY: "scroll", maxHeight: "400px" }}>
      {" "}
      {conversation.map((item, index) => (
        <ChatBubble key={index} type={item.type} content={item.content} />
      ))}
      {questions.map((question) => (
        <Button
          key={question.id}
          onClick={() => handleQuestionClick(question.id)}
        >
          {question.question}
        </Button>
      ))}
    </div>
  );
};

export default ChatBot;
