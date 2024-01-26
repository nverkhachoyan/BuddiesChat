const user_name = document.getElementById("user_name");
const join_button = document.getElementById("join_button");

let myUserName = "";

user_name.addEventListener("keyup", function () {
    myUserName = user_name.value;
});

join_button.addEventListener('click', function () {
    console.log(myUserName)
})
