# Class Notes

## Table of contents

1. [Github](#github)
2. [AWS](#aws)
3. [HTML](#html)
4. [Terminal Commands](#terminal-commands)
5. [CSS Cheat Sheet](#css-cheat-sheet)

## Github

Pretty basic coverage of commit/pull/push commands.

## AWS

Learned how to set up an instance with EC2, apply an elastic IP address, register a domain name with Route 53, and route said domain name to the instance. Also covered SSH into an instance, HTTP vs HTTPS, Caddy, TLS, etc.

Some helpful acronym definitions:
- **HTTP**: **H**yper**t**ext **T**ransport **P**rotocol
- **HTTPS**: **H**yper**t**ext **T**ransport **P**rotocol **S**ecure
- **TLS**: **T**ransport **L**ayer **S**ecurity

## HTML

**HTML** (**H**yper**t**ext **M**arkup **L**anguage) provides basic structure to web pages. Some helpful HTML things:
- Documents start with `<!DOCTYPE html>`
- head
    - meta
    - title
    - link to stylesheet/css file
        - E.g. 
        ```html
        <link rel="stylesheet" href="sheet.css">```
- body - has all of the main stuff
    - header
    - main
    - footer
    - within those, links (a), text (p), headers, div, form, button, etc.
    - At the bottom of body, link JS
        - E.g. 
        ```html
        <script src="email.js"></script>```

## Terminal Commands

- chmod - change permissions
- pwd - print working directory
- cd - change directory
- ls - list files
- vim/nano - text editors
- mkdir - make directory
- mv - move/rename
- rm - remove
- man - manual
- ssh - remote shell
- ps - processes
- wget - download files
- sudo - run as admin

## CSS Cheat Sheet

- "The innermost box holds the element's content. This is where things like the text or image of an element is displayed. Next comes the padding. The padding will inherit things like the background color. After padding is the border, which has properties like color, thickness and line style. The final box is the margin. The margin is considered external to the actual styling of the box and therefore only represents whitespace."
- "By default, the width and height of an element is defined by the width and height of the content box. You can change the box-sizing CSS property from the default value of content-box to border-box in order to redefine the width and height to also include the padding and the border."
- Helpful commands:

| Property           | Value                              | Example             | Discussion                                                                     |
| ------------------ | ---------------------------------- | ------------------- | ------------------------------------------------------------------------------ |
| background-color   | color                              | `red`               | Fill the background color                                                      |
| border             | color width style                  | `#fad solid medium` | Sets the border using shorthand where any or all of the values may be provided |
| border-radius      | unit                               | `50%`               | The size of the border radius                                                  |
| box-shadow         | x-offset y-offset blu-radius color | `2px 2px 2px gray`  | Creates a shadow                                                               |
| columns            | number                             | `3`                 | Number of textual columns                                                      |
| column-rule        | color width style                  | `solid thin black`  | Sets the border used between columns using border shorthand                    |
| color              | color                              | `rgb(128, 0, 0)`    | Sets the text color                                                            |
| cursor             | type                               | `grab`              | Sets the cursor to display when hovering over the element                      |
| display            | type                               | `none`              | Defines how to display the element and its children                            |
| filter             | filter-function                    | `grayscale(30%)`    | Applies a visual filter                                                        |
| float              | direction                          | `right`             | Places the element to the left or right in the flow                            |
| flex               |                                    |                     | Flex layout. Used for responsive design                                        |
| font               | family size style                  | `Arial 1.2em bold`  | Defines the text font using shorthand                                          |
| grid               |                                    |                     | Grid layout. Used for responsive design                                        |
| height             | unit                               | `.25em`             | Sets the height of the box                                                     |
| margin             | unit                               | `5px 5px 0 0`       | Sets the margin spacing                                                        |
| max-[width/height] | unit                               | `20%`               | Restricts the width or height to no more than the unit                         |
| min-[width/height] | unit                               | `10vh`              | Restricts the width or height to no less than the unit                         |
| opacity            | number                             | `.9`                | Sets how opaque the element is                                                 |
| overflow           | [visible/hidden/scroll/auto]       | `scroll`            | Defines what happens when the content does not fix in its box                  |
| position           | [static/relative/absolute/sticky]  | `absolute`          | Defines how the element is positioned in the document                          |
| padding            | unit                               | `1em 2em`           | Sets the padding spacing                                                       |
| left               | unit                               | `10rem`             | The horizontal value of a positioned element                                   |
| text-align         | [start/end/center/justify]         | `end`               | Defines how the text is aligned in the element                                 |
| top                | unit                               | `50px`              | The vertical value of a positioned element                                     |
| transform          | transform-function                 | `rotate(0.5turn)`   | Applies a transformation to the element                                        |
| width              | unit                               | `25vmin`            | Sets the width of the box                                                      |
| z-index            | number                             | `100`               | Controls the positioning of the element on the z axis |

- Units:

| Unit | Description                                                      |
| ---- | ---------------------------------------------------------------- |
| px   | The number of pixels                                             |
| pt   | The number of points (1/72 of an inch)                           |
| in   | The number of inches                                             |
| cm   | The number of centimeters                                        |
| %    | A percentage of the parent element                               |
| em   | A multiplier of the width of the letter `m` in the parent's font |
| rem  | A multiplier of the width of the letter `m` in the root's font   |
| ex   | A multiplier of the height of the element's font                 |
| vw   | A percentage of the viewport's width                             |
| vh   | A percentage of the viewport's height                            |
| vmin | A percentage of the viewport's smaller dimension                 |
| vmax | A percentage of the viewport's larger dimension                  |

## Final Notes

### The Practice Questions with answers:

1. What is the default port for HTTP/HTTPS/SSH? 
    - Default port for HTTP: 80
    - Default for HTTPS: 443
    - Default for SSH: 22
2. What does an HTTP status code in the range of 300/400/500 indicate?
    - 100 Informational
    - 200 Success
    - 300 Redirection
    - 400 User Error
    - 500 Server Error
    - Basically 300/400/500 is more action needed or a fail
3. What does the HTTP header content-type allow you to do?
    - Specifies what type the media being transferred is (tells how to interpret data being sent/received)
4. What does a “Secure cookie”/”Http-only cookie”/”Same-site cookie” do? https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
    - Secure: Tells the browser to only send the cookie to the server with an encrypted request over HTTPS
    - HttpOnly: Forbids client-side JavaScript from accessing the cookie via document.cookie. Prevents Cross-Site Scripting (XSS) attacks from stealing the cookie.
    - SameSite: Instructs the browser whether to send the cookie along with cross-site requests. Prevents Cross-Site Request Forgery (CSRF) attacks.
5. Assuming the following Express middleware, what would be the console.log output for an HTTP GET request with a URL path of /api/document?
6. Given the following Express service code: What does the following front end JavaScript that performs a fetch return?
    - Receives a promise. The first `.then({some stuff here})` returns the raw response object. The second `.then()` waits for the first promise to resolve and receives a fully parsed json object
7. Given the following MongoDB query, select all of the matching documents {name:Mark}
    - It's case sensitive
8. How should user passwords be stored?
    - Encrypted, yay. One way hashing function with a unique salt (such as Bcrypt).
9. Assuming the following node.js websocket code in the back end, and the following front end websocket code, what will the front end log to the console?
10. What is the websocket protocol intended to provide?
11. What do the following acronyms stand for? JSX, JS, AWS, NPM, NVM
    | Acronym | Stands For           | Context/Brief Description                                       |
    |---------|----------------------|-----------------------------------------------------------------|
    | JSX     | JavaScript XML       | "A syntax extension for JavaScript, typically used with React." |
    | JS      | JavaScript           | "A high-level, interpreted programming language."               |
    | AWS     | Amazon Web Services  | Amazon's cloud computing platform.                              |
    | NPM     | Node Package Manager | The default package manager for Node.js.                        |
    | NVM     | Node Version Manager | A utility to manage multiple versions of Node.js.               |
12. Assuming an HTML document with a body element. What text content will the following React component generate?  The react component will use parameters.
13. Given a set of React components that include each other, what will be generated
14. What does a React component with React.useState do?
    - Allows a state to be held and managed. It re-renders everytime the state setter function (the example given was `setCount`) is used
15. What are React Hooks used for?
    - Lets you hook into react states. E.g. `useState` or `useEffect`. They render when the dependabilities change and keep track of what state they are in. Very helpful. Didn't used to be a thing
16. What does the State Hook/Context Hook/Ref Hook/Effect Hook/Performance Hook do? https://react.dev/reference/react/hooks
    | Hook Name               | Function | Primary Use Case |
    |-------------------------|----------|------------------|
    | State Hook (`useState`) | Lets you add React state to function components. | "Managing local component data (e.g., count, input value)." |
    | Context Hook (`useContext`) | Lets you subscribe to React Context. | "Consuming globally accessible state (e.g., theme, user auth)." |
    | Ref Hook (`useRef`) | Provides a mutable ref object to hold a reference. | "Accessing a DOM element directly, or storing a mutable value that doesn't trigger re-renders." |
    | Effect Hook (`useEffect`) | "Lets you perform side effects (data fetching, subscriptions, manual DOM changes)." | Running code after the component renders. |
    | "Performance Hooks (`useMemo`, `useCallback`)" | Provides memoization to optimize performance. | Caching values (useMemo) or functions (`useCallback`) to avoid unnecessary recalculations/re-renders. |
17. Given React Router code, select statements that are true.
    - React Router:
        - Enables client-side routing, allows URL changes without a full page refresh.
        - Application must be wrapped in a Router component (e.g., `<BrowserRouter>`).
        - `<Route>` component maps URL path to a specific component to be rendered.
        - `<Link>` component is for navigation without full page reloads.
18. What does the package.json file do?
    - Stores metadata, manages dependencies
19. What does the fetch function do?
    - Network requests (APIs). Returns a promise function
20. What does node.js do?
    - JavaScript runtime environment, allows you to run server side code for development
21. What does pm2 do?
    - Process Manager 2 is a production process manager for Node.js applications. It manages, runs, and keeps Node.js applications alive 24/7 in production. Auto-restarts crashed apps, monitors resource usage, and manages clustering/load balancing.
22. What does Vite do?
    - Vite runs the front end.