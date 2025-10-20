import React from 'react';
import './space.css';

import Button from 'react-bootstrap/Button';

export function Space(props) {
    const [onlineUsers, setOnlineUsers] = React.useState([]);
    const [currentChat, setCurrentChat] = React.useState(localStorage.getItem('currentChat') || '');

    function setChat(user) {
        localStorage.setItem('currentChat', user);
        setCurrentChat(user);
    }

    async function addRandomUsers() {
        let users = [];
        const newUser = { name: 'user1' };
        const newUser2 = { name: 'user2'};
        const newUser3 = { name: 'user3'};

        users.push(newUser);
        users.push(newUser2);
        users.push(newUser3);

        localStorage.setItem('onlineUsers', JSON.stringify(users));
    }

    React.useEffect(() => {
        addRandomUsers();
        const usersText = localStorage.getItem('onlineUsers');
        if (usersText) {
            setOnlineUsers(JSON.parse(usersText));
        }
    }, [])

    const usersDisplay = [];
    if (onlineUsers.length) {
        for (const [i, user] of onlineUsers.entries()) {
            usersDisplay.push(
                <li>
                    {user.name}
                    <button onClick={() => setChat(user.name)}>
                        Chat
                    </button>
                </li>
            );
        }
    } else {
        usersDisplay.push(<li>No users online.</li>);
    }

    setInterval(() => {
        // This will be replaced with WebSocket messages
        const userName = `User-${Math.floor(Math.random() * 100)}`;
        displayPeerMessage({ msg: 'Hello', from: userName });
    }, 1000);

  return (
    <main>
        <section id="left">
            <section className="userList">
                <h3>Online Users:</h3>
                <ul>
                    {usersDisplay}
                    {/* Users here */}
                </ul>
                
            </section>
            
            <section className="dictionary">
                <h3>App Component (Define English Words)</h3>
                <label for="definitionSearch">Define: </label>
                <input type="word" id="definitionSearch" placeholder="Text Here" />
                <p id="definitionResponse">n. A definition or two will appear here</p>
            </section>
            </section>

            <section className="messagingSpace">
            <h3>Messaging Space:</h3>
            <h4>Chat with: {currentChat}</h4>
            <div className="messageIncoming">
                <p from={currentChat}>Incoming message</p>
            </div>
            <div className="messageOutgoing">
                <p from={props.username}>Outgoing Message</p>
                <p from={props.username}>A second outgoing message</p>
            </div>
            <div id="messageInput">
                <input type="message" id="currentMessage" placeholder="Text Here" />
                <button type="submit" id="send">Send</button>
            </div>
            </section>
        
    </main>
  )
}