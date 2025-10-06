import React from 'react';
import './space.css';

export function Space() {
  return (
    <main>
        <section id="left">
            <section className="userList">
                <h3>Database Component (User List)</h3>
                <ul>
                    <li>
                        User1
                        <button id="user1Chat">
                            Chat
                        </button>
                    </li>

                    <li>
                        User2
                        <button id="user2Chat">
                            Chat
                        </button>
                    </li>

                    <li>
                        User3
                        <button id="user3Chat">
                            Chat
                        </button>
                    </li>
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
            <h3>App/Websocket Component (Messaging Space)</h3>
            <h4>Chat with: [User1]</h4>
            <div className="messageIncoming">
                <p from="user1">Incoming message</p>
            </div>
            <div className="messageOutgoing">
                <p from="self">Outgoing Message</p>
                <p from="self">A second outgoing message</p>
            </div>
            <div id="messageInput">
                <input type="message" id="currentMessage" placeholder="Text Here" />
                <button type="submit" id="send">Send</button>
            </div>
            </section>
        
    </main>
  )
}