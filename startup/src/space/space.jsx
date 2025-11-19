import React from 'react';
import './space.css';
import { Message, MessageNotifier } from './messageNotifier';

import Button from 'react-bootstrap/Button';

export function Space(props) {
    const [onlineUsers, setOnlineUsers] = React.useState([]);
    const [currentChat, setCurrentChat] = React.useState(localStorage.getItem('currentChat') || '');
    const [word, setWord] = React.useState(localStorage.getItem('word') || '');
    const [definition, setDefiniton] = React.useState(localStorage.getItem('definiton') || '');
    const [currentMessage, setCurrentMessage] = React.useState(localStorage.getItem('currentMessage') || '');
    const [messages, setMessages] = React.useState([]);
    const username = props.username;

    function setChat(user) {
        localStorage.setItem('currentChat', user);
        setCurrentChat(user);
    }

    React.useEffect(() => {
        fetch('/api/online')
            .then((response) => response.json())
            .then((onlineUsers) => {
                setOnlineUsers(onlineUsers);
            })
    }, [])
    

    const usersDisplay = [];
    if (onlineUsers.length > 0) {
        for (const [i, user] of onlineUsers.entries()) {
            usersDisplay.push(
                <li>
                    {user.email}, language: {user.language}, level: {user.level}
                    {/* <button class='outline-secondary' onClick={() => setChat(user.email)}>
                        Chat
                    </button> */}
                </li>
            );
        }
    } else {
        usersDisplay.push(<li>No users online.</li>);
    }

    async function searchWord() {
    let address = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + String(word);

    fetch(address)
    .then((response) => response.json())
    .then((data) => {
        if (data.title) {
            setDefiniton(data.title); 
        } else {
            let infos = data[0].meanings[0];
            setDefiniton(`${infos.partOfSpeech}. ${infos.definitions[0].definition}`);
        }
    })
    .catch();
    }

    React.useEffect(() => {
        MessageNotifier.addHandler(handleMessage);

        return () => {
            MessageNotifier.removeHandler(handleMessage);
        }
    }, []);

    function handleMessage(message) {
        // console.log(`messages = ${messages}\nmessage = ${message}`)
        setMessages([...messages, message]);
        // console.log(`messages = ${messages}\nmessage = ${message}`)
    }

    function createMessages() {
        const messageArray = [];

        for (const [i, message] of messages.entries()) {
            let sender = 'unknown';
            if (message.from === username) {
                sender = 'sent';
            } else if (message.from === 'System') {
                sender = 'system';
            } else {
                sender = 'received';
            }

            messageArray.push(
                <div key={i}>
                    {/* <p>Messages = {messages.length}</p> */}
                    <span className={sender}>{message.from}</span> {message.content}
                </div>
            );
        }
        return messageArray;
    }


    function doneMessage(e) {
        if (e.key === 'Enter') {
            sendMsg();
        }
    }

    function sendMsg() {
        MessageNotifier.broadcastEvent(username, currentMessage);
        handleMessage(new Message(username, currentMessage))
        setCurrentMessage('');
    }


  return (
    <main>
        <section id="left">
            <section className="userList">
                <h3>Online Users:</h3>
                <ul>
                    {usersDisplay}
                </ul>
                
            </section>
            
            <section className="dictionary">
                <h3>English Dictionary</h3>
                <label for="definitionSearch">Define:   </label>
                <input type="word" id="definitionSearch" placeholder="Text Here" value={word} onChange={(e) => setWord(e.target.value)} />
                <Button variant='outline-primary' onClick={searchWord} >Search</Button>
                <p id="definitionResponse">{definition}</p>
            </section>
            </section>

            <section className="messagingSpace">
            <h3>Messaging Space:</h3>
            {/* <h4>Chat with: {currentChat}</h4> */}
            <div className="messages">
                <main>
                    <div id='chat-text'>{createMessages()}</div>
                </main>
            </div>
            <div id="messageInput">
                <input type="message" id="currentMessage" placeholder="Text Here" value={currentMessage} onKeyDown={(e) => doneMessage(e)} onChange={(e) => setCurrentMessage(e.target.value)} />
                <button type="submit" id="send" onClick={sendMsg}>Send</button>
            </div>
            </section>
        
    </main>
  )
}