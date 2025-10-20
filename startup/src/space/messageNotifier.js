class Message {
    constructor(from, content) {
        this.from = from;
        this.content = content;
    }
}

class MessageNotifier {
  events = [];
  handlers = [];

  constructor() {
    // Simulate chat messages that will eventually come over WebSocket
    setInterval(() => {
      const user = 'Eich';
      this.broadcastEvent(user, "Message", {from: user, content: "Message"});
    }, 5000);
  }

  broadcastEvent(from, content, jsonVersion) {
    const event = new Message(from, content);
    this.receiveEvent(event);
  }

  addHandler(handler) {
    this.handlers.push(handler);
  }

  removeHandler(handler) {
    this.handlers.filter((h) => h !== handler);
  }

  receiveEvent(event) {
    this.events.push(event);

    this.handlers.forEach((handler) => {
      handler(event);
    });
  }
}

const ConstMessageNotifier = new MessageNotifier();
export { Message, MessageNotifier };