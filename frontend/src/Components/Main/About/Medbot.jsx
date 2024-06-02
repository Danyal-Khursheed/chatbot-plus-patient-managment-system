import React, {useState} from "react";
import ReactMarkdown from "react-markdown";
import "./app.css";
import axios from "axios";

const Medbot = () => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [generatingAnswer, setGeneratingAnswer] = useState(false);
  
    async function generateAnswer(e) {
      setGeneratingAnswer(true);
      e.preventDefault();
      setAnswer("Loading your answer... \n It might take up to 10 seconds");
      try {
        const response = await axios({
          url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDmOIh9heU7B20gKhOPdaDpfXwJeD9CiVQ`,
          method: "post",
          data: {
            contents: [{ parts: [{ text: question }] }],
          },
        });
  
        setAnswer(response.data.candidates[0].content.parts[0].text);
      } catch (error) {
        console.log(error);
        setAnswer("Sorry - Something went wrong. Please try again!");
      }
  
      setGeneratingAnswer(false);
    }

  return (
    <div className="chat-container">
      <form onSubmit={generateAnswer} className="form">
        
          <h1 className="title">Chat with Your Doctor</h1>
       
        <textarea
          required
          className="textarea"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter your prompt"
        ></textarea>
        <button type="submit" className={`button ${generatingAnswer ? "disabled" : ""}`} disabled={generatingAnswer}>
          {generatingAnswer ? "Generating..." : "Generate Answer"}
        </button>
      </form>
      <div className="answer-box">
        <ReactMarkdown>{answer}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Medbot;
