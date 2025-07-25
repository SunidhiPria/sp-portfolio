import ChatForm from "./ChatForm";
import ChatbotIcon from "./ChatbotIcon";
import { useEffect, useRef, useState } from "react";
import ChatMessage from "./ChatMessage";
import {info} from "./info";

const Chatbot = () => {
  const [chatHistory, setChatHistory] = useState([{ hideInChat: true, role: "model", text: info }]);
  const [showChatbot, setshowChatbot] = useState(false);
  const chatBodyRef = useRef();

  const generateBotResponse = async (history) => {
    //helper function to update chat history
    const updateHistory = (text, isError = false) => {
      setChatHistory(prev => [...prev.filter(msg => msg.text !== "Thinking..."), {role: "model", text, isError }]);
    };

    //format chat history for api request
    history = history.map(({role, text}) => ({role, parts: [{text}]}));

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: history })
    }

    try{
      //make the api call to get the bot's response
      const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
      const data = await response.json();
      if(!response.ok) throw new Error(data.error.message || "Something went wrong!");

      //clean and update chat history with bot's response
      const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
      updateHistory(apiResponseText);
    }catch(error){
      updateHistory(error.message, true);
    }
  }

  useEffect(() => {
    //auto-scroll whenever chat history updates
    chatBodyRef.current.scrollTo({top: chatBodyRef.current.scrollHeight, behaviour: "smooth"});
  }, [chatHistory]);

  return <div className="chatbot-container">
  <div className={`container ${showChatbot ? "show-chatbot" : ""}`}>
    <button onClick={() => setshowChatbot(prev => !prev)} id="chatbot-toggler">
      <span className="material-symbols-rounded">mode_comment</span>
      <span className="material-symbols-rounded">close</span>
    </button>
    <div className="chatbot-popup">
      {/*Chatbot Header */}
      <div className="chat-header">
        <div className="header-info">
          <ChatbotIcon />
          <h2 className="logo-text">Chatbot</h2>
        </div>
        <button onClick={() => setshowChatbot(prev => !prev)} 
          className="material-symbols-rounded">keyboard_arrow_down</button>
      </div>

      {/*Chatbot Body */}
      <div ref={chatBodyRef} className="chat-body">
        <div className="message bot-message">
          <ChatbotIcon />
          <p className="message-text">
            Hey there👋😊✨<br />How can I help you?
          </p>
        </div>

        {/*render chat history dynamically */}
        {chatHistory.map((chat, index) => (
          <ChatMessage key={index} chat={chat}/>
        ))}
      </div>

      {/*Chatbot Footer */}
      <div className="chat-footer">
      <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
      </div>
    </div>
  </div>
  </div>;
};

export default Chatbot;