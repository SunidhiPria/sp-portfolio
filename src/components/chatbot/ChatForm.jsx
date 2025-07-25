import React from "react";
import { useRef } from "react";

const ChatForm = ({chatHistory, setChatHistory, generateBotResponse }) => {
const inputRef = useRef();

const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if(!userMessage) return;
    inputRef.current.value = "";

    //update chat history with user's message
    setChatHistory((history) => [...history, { role: "user", text: userMessage }]);

    //600ms delay before showing "Thinking..." and generating response
    setTimeout(() => {
        //add a thinking placeholder for the bot's response
        setChatHistory((history) => [...history, { role: "model", text: "Thinking..." }]);
        
        //call the function to generate the bot's response
        generateBotResponse([...chatHistory, { role: "user", text: `Using the details provided above, please address this query: ${userMessage}` }]);
        }, 600);
    }

    return (
        <div>
            <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
        <input ref={inputRef} type="text" placeholder="Message..." required className="message-input" />
        <button 
          className="material-symbols-rounded" type="submit">arrow_upward</button>
      </form>
        </div>
    );
};

export default ChatForm;