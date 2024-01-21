// General Chatbot - let user start the conversation

// elements
const sendBtn = document.getElementById('sendBtn');
const textbox = document.getElementById('textbox');
const chatContainer = document.getElementById('chatContainer');
const ticket = new Date().getTime();

const user = { message: "" };

function getDate() {
    const date = new Date();
    const day = date.getDay();
    const month = date.getMonth();
    const dayOfMonth = date.getDate();

    const dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', "Aug", 'Sep', 'Oct', 'Nov', 'Dec'];

    return `${dayArray[day]}, ${monthArray[month]} ${dayOfMonth}`;
}
const arrayOfPossibleMessages = [
    {
        "message": "how are you?",
        "response": ["I'm great!", "Doing well, thanks!", "Fantastic!"]
    },
    {
        "message": "hi",
        "response": ["Hello!", "Hi there!", "Hey!"]
    },
    {
        "message": "who are you?",
        "response": ["I'm your assistant.", "I'm a chatbot.", "I'm here to help."]
    },
    {
        "message": "what's your name?",
        "response": ["I'm a Dr. Jay .", "I don't have a name.", "Call me Sir J."]
    },
    {
        "message": "how old are you?",
        "response": ["I'm ageless.", "Time doesn't apply to me.", "I don't have an age."]
    },
    {
        "message": "do you have kids?",
        "response": ["No, I don't!", "Kids? Not in my programming.", "I'm child-free."]
    },
    {
        "message": "do you sleep early?",
        "response": ["No, I don't!", "I'm always awake.", "Sleep is for humans."]
    },
    {
        "message": "do you have a car?",
        "response": ["No, I don't need one.", "I travel through space.", "My mode of transportation is digital."]
    },
    {
        "message": "can you dance?",
        "response": ["Yes, tango.", "I've got some digital dance moves.", "Dancing? In binary."]
    },
    {
        "message": "what's your fav food?",
        "response": ["Pizza!", "I'm into digital snacks.", "I feast on ones and zeros."]
    },
    {
        "message": "do you have a job?",
        "response": ["Yes, I'm here chatting with you.", "I'm a full-time chatbot.", "My job is to assist."]
    },
    {
        "message": "where do you live?",
        "response": ["In the web.", "My home is the digital realm.", "I'm everywhere and nowhere."]
    },
    {
        "message": "where were you born?",
        "response": ["On Mars.", "I emerged from the digital cosmos.", "I'm a child of the internet."]
    },
    {
        "message": "do you have siblings?",
        "response": ["Yes, I have got 3.", "I'm part of a chatbot family.", "Siblings? Digital companions."]
    },
    {
        "message": "find me a job",
        "response": [
            "Sure, <a href='https://www.indeed.com/jobs?q=engineer&l=' target='_blank'>Click here</a>",
            "Check out this job: <a href='https://www.indeed.com/jobs?q=engineer&l=' target='_blank'>Job Link</a>",
            "I found a job for you: <a href='https://www.indeed.com/jobs?q=engineer&l=' target='_blank'>Apply here</a>"
        ]
    },
    {
        "message": "today's date",
        "response": [getDate(), getDate(), getDate()]
    }
];

function chatbotSendMessage(messageText) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-left');
    messageElement.classList.add('shadow-sm');
    messageElement.style.margin = "10px";
    messageElement.style.padding = "5px";

    messageElement.innerHTML = `<span>Dr. Jay: </span><span style="margin-top:10px; padding:10px">${messageText}</span>`;

    messageElement.animate([{ easing: "ease-in", opacity: 0.4 }, { opacity: 1 }], { duration: 1000 });
    chatContainer.appendChild(messageElement);

    // scroll to the last message
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function sendMessage(messageText) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-right');
    messageElement.classList.add('shadow-sm');
    messageElement.style.margin = "10px";
    messageElement.style.padding = "5px";

    messageElement.innerHTML = `<span>You: </span><span style="margin-top:10px; padding:10px">${messageText}</span>`;

    messageElement.animate([{ easing: "ease-in", opacity: 0.4 }, { opacity: 1 }], { duration: 1000 });

    chatContainer.appendChild(messageElement);

    // scroll to last message
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// let user start convo
function processMessage() {
    if (user.message.length > 5 || user.message.includes('hi')) {
        // array of results
        const result = arrayOfPossibleMessages.filter(val => val.message.includes(user.message.toLowerCase()));

        if (result.length > 0) {
            const responses = result[0].response;
            const response = responses[Math.floor(Math.random() * responses.length)];

            setTimeout(() => {
                chatbotSendMessage(response);
            }, 1000);
        } else {
            setTimeout(() => {
                chatbotSendMessage("I don't understand!");
            }, 1000);
        }
    } else if (user.message == "how" || user.message == "who") {
        setTimeout(() => {
            chatbotSendMessage("?");
        }, 1000);
    } else {
        setTimeout(() => {
            chatbotSendMessage("Please send me a complete sentence");
        }, 1000);
    }
}

sendBtn.addEventListener('click', function (e) {
    if (textbox.value == "") {
        alert('Please type in a message');
    } else {
        const messageText = textbox.value.trim();
        user.message = messageText;
        sendMessage(messageText);
        textbox.value = "";

        processMessage();
    }
});

textbox.addEventListener('keypress', function (e) {
    // if user hits the enter button on keyboard (13)
    if (e.which == 13) {
        if (textbox.value == "") {
            alert('Please type in a message');
        } else {
            const messageText = textbox.value.trim();
            user.message = messageText;
            sendMessage(messageText);
            textbox.value = "";

            processMessage();
        }
    }
});

