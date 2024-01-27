// Socket definitions
var socket;

// Welcome window elements
const welcome_window = document.getElementById("welcome");

// Chat window elements
const chat_window = document.getElementById("chat");
const messages = document.getElementById("messages");
const message_box = document.getElementById("message_box");
const send_msg_button = document.getElementById("send_a_message");
const user_name = document.getElementById("user_name");
const join_button = document.getElementById("join_button");

// Welcome window event Listeners
join_button.addEventListener("click", function (event) {
    handle_join(event);
});

user_name.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        handle_join(event);
    }
});

// Chat window event listeners

send_msg_button.addEventListener("click", function (event) {
    send_message(event);
});

message_box.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        send_message(event);
    }
})

// Join chat handlers

function handle_join(event) {
    if (user_name.value == "") {
        alert("Username cannot be empty!");
    } else {
        console.log(user_name.value);
        welcome_window.style.display = "none";
        chat_window.style.display = "block";
        socket = io();
    }
}

// Chat handlers

function send_message(event) {
    const li = document.createElement("li");
    const msg = message_box.value;
    li.appendChild(document.createTextNode(msg));
    messages.appendChild(li);
    socket.on('connect', function () {
        socket.emit('message', { data: msg });
    });
}

