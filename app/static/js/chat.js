// Define elements
const user_name = document.getElementById("user_name");
const join_button = document.getElementById("join_button");

// Event Listeners
join_button.addEventListener("click", function (event) {
    handle_submit(event);
});

user_name.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        handle_submit(event);
    }
});

// Handlers

function handle_submit(event) {
    if (user_name.value == "") {
        alert("Username cannot be empty!");
    } else {
        console.log(user_name.value);

    }
}
