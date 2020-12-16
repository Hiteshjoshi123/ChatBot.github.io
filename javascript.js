var massages = {
    "hello": "Hello.",
    "hii": "Hii.",
    "Hello": "Hello.",
    "Hii": "Hii.",
    "what is your name": "my name is James.",
    "how are you": "I am fine Thankyou for asking.",
    "how old are you": "I can't tell you because i feel shy when i tell someone about my age.",
    "What is your name": "my name is James.",
    "How are you": "I am fine Thankyou for asking.",
    "How old are you": "I can't tell you because i feel shy when i tell someone about my age."
}

function talk() {
    var user = document.getElementById("userBox").value;
    document.getElementById("chatLo").innerHTML += user + "<br>"
    if (user in massages) {
        document.getElementById("chatLog").innerHTML += massages[user] + "<br>"
    } else {
        document.getElementById("chatLog").innerHTML += "I don't understand please say somthing else <br>";
    }
}