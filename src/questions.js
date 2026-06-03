export const questions = [
    {
        "id": 1,
        "category": "Frontend",
        "question": "Which React hook is primarily used to handle side effects like data fetching or DOM manipulation?",
        "options": [
            "useState",
            "useEffect",
            "useContext",
            "useReducer"
        ],
        "correctAnswer": "useEffect",
        "points": 10
    },
    {
        "id": 2,
        "category": "Backend",
        "question": "In a MongoDB connection string, what does the 'srv' protocol (mongodb+srv://) indicate?",
        "options": [
            "Secure Routing Variable",
            "Server Run Validation",
            "Connection using a DNS SRV record to find cluster shards",
            "Static Reverse Volume storage"
        ],
        "correctAnswer": "Connection using a DNS SRV record to find cluster shards",
        "points": 10
    },
    {
        "id": 3,
        "category": "Frontend",
        "question": "Which CSS layout method is designed for single-dimensional layouts (either a row OR a column)?",
        "options": [
            "CSS Grid",
            "Flexbox",
            "Float positions",
            "Block display"
        ],
        "correctAnswer": "Flexbox",
        "points": 10
    },
    {
        "id": 4,
        "category": "Backend",
        "question": "What does the Express.js middleware function 'app.use(express.json())' do?",
        "options": [
            "It converts the entire server console to JSON logs",
            "It parses incoming requests with JSON payloads and makes it available under req.body",
            "It encrypts strings sent to MongoDB databases",
            "It connects the backend to ImageKit automatically"
        ],
        "correctAnswer": "It parses incoming requests with JSON payloads and makes it available under req.body",
        "points": 10
    },
    {
        "id": 5,
        "category": "General Tech",
        "question": "When connecting via SSH for the first time, why does the terminal show an authenticity warning asking you to type 'yes'?",
        "options": [
            "The server is running low on memory space",
            "To save the server's unique cryptographic key fingerprint to your local known_hosts file",
            "To double-check if your computer password is correct",
            "To download the necessary server code libraries to your desktop"
        ],
        "correctAnswer": "To save the server's unique cryptographic key fingerprint to your local known_hosts file",
        "points": 10
    },
    {
        "id": 6,
        "category": "Frontend",
        "question": "Which of the following is true about Tailwind CSS?",
        "options": [
            "It requires writing custom styles inside separate .css files for every component",
            "It relies heavily on pre-made complex components like Bootstrap",
            "It is a utility-first CSS framework used by applying classes directly in HTML/JSX",
            "It can only be used with vanilla JavaScript, not React"
        ],
        "correctAnswer": "It is a utility-first CSS framework used by applying classes directly in HTML/JSX",
        "points": 10
    },
    {
        "id": 7,
        "category": "Backend",
        "question": "What is the primary benefit of hosting static media files on a cloud service like ImageKit instead of saving raw data directly inside MongoDB?",
        "options": [
            "It makes the backend completely immune to internet crashes",
            "MongoDB cannot save text strings at all",
            "It saves local server space and optimizes media delivery globally using a CDN",
            "It forces users to change their Wi-Fi DNS configurations"
        ],
        "correctAnswer": "It saves local server space and optimizes media delivery globally using a CDN",
        "points": 10
    },
    {
        "id": 8,
        "category": "Frontend",
        "question": "What is the primary purpose of the 'key' prop when rendering lists of elements in React?",
        "options": [
            "To apply custom CSS styling directly to the element",
            "To help React identify which items have changed, been added, or been removed safely",
            "To lock the component so users cannot click it",
            "To map the item directly to a MongoDB model database entry"
        ],
        "correctAnswer": "To help React identify which items have changed, been added, or been removed safely",
        "points": 10
    },
    {
        "id": 9,
        "category": "Backend",
        "question": "Which HTTP status code signifies that a requested resource was successfully created on the server?",
        "options": [
            "200 OK",
            "201 Created",
            "400 Bad Request",
            "404 Not Found"
        ],
        "correctAnswer": "201 Created",
        "points": 10
    },
    {
        "id": 10,
        "category": "JavaScript",
        "question": "What is the behavior of 'keyword' const when declaring a variable in JavaScript?",
        "options": [
            "It creates a globally scoped variable that can be redeclared anywhere",
            "It creates a block-scoped variable whose value cannot be reassigned",
            "It automatically converts numbers into strings",
            "It sends the variable directly to an external server file layout"
        ],
        "correctAnswer": "It creates a block-scoped variable whose value cannot be reassigned",
        "points": 10
    },
    {
        "id": 11,
        "category": "Backend",
        "question": "What is the main role of CORS (Cross-Origin Resource Sharing) headers in web applications?",
        "options": [
            "To accelerate image loading speeds across different websites",
            "To allow or restrict requested resources on a web server depending on where the request initiated",
            "To automatically switch server environments from development to production",
            "To assign database routing permissions to unique IP whitelists"
        ],
        "correctAnswer": "To allow or restrict requested resources on a web server depending on where the request initiated",
        "points": 10
    },
    {
        "id": 12,
        "category": "Frontend",
        "question": "In React, how can you pass data from a parent component down to its immediate child components?",
        "options": [
            "Using state properties",
            "Using props options",
            "Using useEffect dependencies",
            "Using export default commands"
        ],
        "correctAnswer": "Using props options",
        "points": 10
    },
    {
        "id": 13,
        "category": "JavaScript",
        "question": "Which of the following array methods creates a new array populated with the results of calling a provided function on every element?",
        "options": [
            "forEach()",
            "filter()",
            "map()",
            "reduce()"
        ],
        "correctAnswer": "map()",
        "points": 10
    },
    {
        "id": 14,
        "category": "Backend",
        "question": "What environment file configuration is commonly used to hide secret database passwords and API keys from GitHub repositories?",
        "options": [
            ".config configuration files",
            ".env profile files",
            "package.json layouts",
            "server.js parameters"
        ],
        "correctAnswer": ".env profile files",
        "points": 10
    },
    {
        "id": 15,
        "category": "Frontend",
        "question": "What does the 'flex-col' utility class do in Tailwind CSS?",
        "options": [
            "It changes the element's font color to variable values",
            "It establishes a flex container with items stacked vertically down a column layout",
            "It automatically hides the element on desktop viewports",
            "It builds a grid environment consisting of 12 distinct tracks"
        ],
        "correctAnswer": "It establishes a flex container with items stacked vertically down a column layout",
        "points": 10
    },
    {
        "id": 16,
        "category": "General Tech",
        "question": "What is the purpose of running the 'git init' command in your terminal?",
        "options": [
            "To deploy a local web application directly to a live custom web domain hosting platform",
            "To install all tracking dependencies stored inside your project's main script tracker",
            "To initialize a brand new local Git repository within your current folder structure",
            "To securely log into your GitHub account from your personal laptop"
        ],
        "correctAnswer": "To initialize a brand new local Git repository within your current folder structure",
        "points": 10
    },
    {
        "id": 17,
        "category": "Backend",
        "question": "Which HTTP method is specifically intended to completely update or replace an existing document entry inside a database?",
        "options": [
            "GET method",
            "POST method",
            "PUT method",
            "DELETE method"
        ],
        "correctAnswer": "PUT method",
        "points": 10
    },
    {
        "id": 18,
        "category": "JavaScript",
        "question": "What will 'console.log(typeof [])' output in a standard JavaScript console environment?",
        "options": [
            "'array'",
            "'object'",
            "'list'",
            "'undefined'"
        ],
        "correctAnswer": "'object'",
        "points": 10
    },
    {
        "id": 19,
        "category": "Frontend",
        "question": "Which HTML5 semantic element is most appropriate for wrapping independent, self-contained structural content (like a blog post or a forum card entry)?",
        "options": [
            "<section>",
            "<div>",
            "<article>",
            "<aside>"
        ],
        "correctAnswer": "<article>",
        "points": 10
    },
    {
        "id": 20,
        "category": "Backend",
        "question": "In Node.js backend architecture, what does the command 'process.exit(1)' explicitly indicate to the operating system?",
        "options": [
            "The application has completed running successfully with zero internal runtime issues",
            "The application is restarting automatically via nodemon background loops",
            "The application is terminating immediately due to an unhandled crash or connection failure",
            "The application is shifting ports from local server listening states over to cloud instances"
        ],
        "correctAnswer": "The application is terminating immediately due to an unhandled crash or connection failure",
        "points": 10
    }
]