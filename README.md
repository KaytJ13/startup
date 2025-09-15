# Behalten

[My Notes](notes.md)

_Behalten_ is a web-based application intended to assist users in maintaining or expanding their foreign language skills. It allows users to interact with others who are learning or who speak the same language as them, leading to preservation of their skills and growth in their abilities.


## 🚀 Specification Deliverable

For this deliverable I did the following (I checked the box `[x]` and added a description for the things I completed):

- [x] **Proper use of Markdown** - I used Markdown properly
- [x] **A concise and compelling elevator pitch** - I added an [elevator pitch](#elevator-pitch)
- [x] **Description of key features** - I described the [key features](#key-features)
- [x] **Description of how you will use each technology** - I planned out and described my use of each [technology](#technologies)
- [x] **One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.** - I added sketches of my application [design](#design) using Markdown image references

### Elevator pitch

Have you ever spent time studying a foreign language only to remember none of it a short time later? Have you moved away from home and no longer have opportunities to speak your native language? _Behalten_ is an application designed to help users maintain their language skills. Users can connect with others of their skill level and practice together in a natural conversation setting.

### Design

This is a tentative mock up for the design of the login page:

![Page 1 mock up](behaltenPage1.png)

The language selection page:

![Page 2 mock up](behaltenPage2.png)

The space/ability level selection page:

![Page 3 mock up](behaltenPage3.png)

The space page where the user can interact with others and chat in the target language:

![Page 4 mock up](behaltenPage4.png)

This is a simplified sequence diagram showing the idea of how the various clients will interact with the website:

```mermaid
sequenceDiagram
    create actor User1
    create participant Website
    User1->>Website: Login
    Website-->>User1: Available languages
    User1->>Website: Language selection
    Website-->>User1: Available spaces
    User1->>Website: Space join request
    Website-->>User1: Current occupants
    par
        create actor User2
        Website-->>User2: User1 joined the space
    and
        create actor User3
        Website-->>User3: User1 joined the space
    end
    User1->>Website: Message
    par
        Website-->>User2: User1: Message
    and
        Website-->>User3: User1: Message
    end
    User3->>Website: Response
    par
        Website-->>User1: User3: Response
    and
        Website-->>User3: User3: Response
    end
```

### Key features

- Secure login
- Ability to select language and ability level
- Ability to select user with whom to message
- Ability to hold a conversation message stream with other users
- Ability to define English words

### Technologies

The required technologies will be implemented to provide the following:

- **HTML** - HTML structure to build 4 pages. One for login, one for language selection, one for space (ability level) selection, and one for the actual conversation space. 
- **CSS** - Styling to appear visually appealing on various sizes of screens, including spacing, color palette, and more.
- **React** - Provides login/register and logout, displays language options, displays available spaces, allows the user to select language and space, displays other users, allows the user to open or close a chat, sends messages, returns to a previous page, requests and displays definitions, and uses React for endpoint calls and routing.
- **Service** - Backend with endpoints to:
    - Login, logout, and register a user
    - Join a space
    - Retrieve users in a space
    - Send messages
    - Leave a space
    - Request a definition (using the [Free Dictionary](https://dictionaryapi.dev) API)
- **DB/Login** - Stores user data, stores authentication data, and stores spaces and occupants.
- **WebSocket** - Broadcasts messages to other users in the chat, broadcasts join/leave notifications to other users in the space, and receives definitions.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - [My server link](https://behalten.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **HTML pages** - I did not complete this part of the deliverable.
- [ ] **Proper HTML element usage** - I did not complete this part of the deliverable.
- [ ] **Links** - I did not complete this part of the deliverable.
- [ ] **Text** - I did not complete this part of the deliverable.
- [ ] **3rd party API placeholder** - I did not complete this part of the deliverable.
- [ ] **Images** - I did not complete this part of the deliverable.
- [ ] **Login placeholder** - I did not complete this part of the deliverable.
- [ ] **DB data placeholder** - I did not complete this part of the deliverable.
- [ ] **WebSocket placeholder** - I did not complete this part of the deliverable.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Header, footer, and main content body** - I did not complete this part of the deliverable.
- [ ] **Navigation elements** - I did not complete this part of the deliverable.
- [ ] **Responsive to window resizing** - I did not complete this part of the deliverable.
- [ ] **Application elements** - I did not complete this part of the deliverable.
- [ ] **Application text content** - I did not complete this part of the deliverable.
- [ ] **Application images** - I did not complete this part of the deliverable.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - I did not complete this part of the deliverable.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [ ] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable.


## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
