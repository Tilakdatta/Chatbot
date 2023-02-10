let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
let chatContainerE1 = document.getElementById("chatContainer");
let userInputE1 = document.getElementById("userInput");

function sendingMsgToChatBox() {
    let userMsg = userInputE1.value;

    let msgContainerE1 = document.createElement("div");
    msgContainerE1.classList.add("msg-to-chatbot-container");
    chatContainerE1.appendChild(msgContainerE1);

    let userMsg1 = document.createElement("span");
    userMsg1.textContent = userMsg;
    userMsg1.classList.add("msg-to-chatbot");
    msgContainerE1.appendChild(userMsg1);

    userInput.value = "";
    getReplyFromChatBox();
}

function getReplyFromChatBox() {
    let numberOf = chatbotMsgList.length;
    let chatBotMsg = chatbotMsgList[Math.ceil(Math.random() * numberOf) - 1];

    let msgContainerE1 = document.createElement("div");
    msgContainerE1.classList.add("msg-from-chatbot-container");
    chatContainerE1.appendChild(msgContainerE1);

    let userMsg1 = document.createElement("span");
    userMsg1.textContent = chatBotMsg;

    userMsg1.classList.add("msg-from-chatbot");
    msgContainerE1.appendChild(userMsg1);


}