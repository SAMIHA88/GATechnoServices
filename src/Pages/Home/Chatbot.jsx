import React, { useState } from 'react';
import {CgClose} from 'react-icons/cg';
import {IoMdOpen} from 'react-icons/io';
import {RiSendPlaneFill}from 'react-icons/ri';
const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [messagesVisible, setMessagesVisible] = useState(true); // Nouvel état


  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    // Répondre aux questions prédéfinies
    const lowercaseInput = input.toLowerCase();
    let response = '';

    if (messages.length === 0) {
      response = "Bonjour! Comment puis-je vous aider?";
    } else if (lowercaseInput.includes('services')) {
      response = "Nos services sont : Développement, Réseau et cloud";
    } else if (lowercaseInput.includes('ca')||lowercaseInput.includes('chiffre d\'affaires')||lowercaseInput.includes('chiffre affaire')) {
      response = "Notre chiffre d'affaire est 60000dhs";
    } else if (lowercaseInput.includes('nom')||lowercaseInput.includes('entreprise')||lowercaseInput.includes('societe')) {
      response = "Notre entreprise est appelée GATechno";
    } else if (lowercaseInput.includes('garantie')||lowercaseInput.includes('probleme')) {
      response = "On a un meilleur service aprés vente"; 
    }   else if (lowercaseInput.includes('site')||lowercaseInput.includes('lien')) {
      response = "www.gatechno.ma"; 
    } else {
      response = "Désolé, en tant que chatBot, je ne peux répondre qu'à certaines questions.";
    }

    // Ajouter le message de l'utilisateur suivi de la réponse
    setMessages([
      ...messages,
      { text: input, user: true },
      { text: response, user: false }
    ]);

    setInput('');
  };

  return (
       <div className={`chatbot ${messagesVisible ? '' : 'collapsed'}`}>
      
    <div className="chatbot__header">
      <img
         src={"./img/chatbot2.gif"} 
        alt="Chatbot Logo"
        className="chatbot__logo"
      />
      <h2 className="chatbot__title">Chatbot</h2>
      <button className="chatbot__toggle-button" onClick={() => setMessagesVisible(!messagesVisible)}>
          {messagesVisible ? <CgClose/> : <IoMdOpen/>}
        </button>
    </div>
      <div className="chatbot__messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.user ? 'user' : 'bot'}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot__input">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Posez une question..."
        />
        <button onClick={handleSendMessage}><RiSendPlaneFill/></button>
      </div>
    </div>
  );
};

export default Chatbot;
