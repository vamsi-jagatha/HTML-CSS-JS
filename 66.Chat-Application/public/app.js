const socket = io()
let username;
let textarea = document.querySelector('#textarea')
let messageArea = document.querySelector('.message-area');
let sendBtn = document.querySelector('.sendBtn');



do {
    username = prompt('Please enter your username: ')
} while(!username)
    
textarea.addEventListener('keyup', (e) => {
    if(e.key === 'Enter') {
        sendMessage(e.target.value)
    }
})
    

sendBtn.addEventListener('click',(e)=>{
    sendMessage(textarea.value)
})

function sendMessage(message) {
    class TimeFormatter {
        constructor(time) {
            this.time = time;
        }
    
        format() {
            let hours = this.time.getHours();
            let minutes = this.time.getMinutes();
            const formattedHours = hours < 10 ? "0" + hours : hours;
            const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
            return `${formattedHours}:${formattedMinutes}`;
        }
    }
    
    let time = new Date();
    let formatter = new TimeFormatter(time);
    
    let msg = {
        user: username,
        message: message.trim(),
        time:formatter.format()
    }
    // Append 
    appendMessage(msg, 'outgoing')
    textarea.value = ''
    scrollToBottom()

    // Send to server 
    socket.emit('message', msg)

}

function appendMessage(msg, type) {
    let mainDiv = document.createElement('div')
    let className = type
    mainDiv.classList.add(className, 'message')
    let markup = `
    <h4>${msg.user}</h4>

    <p>${msg.message}</p>
    <h6>${msg.time}<h6/>

    `
    mainDiv.innerHTML = markup
    messageArea.appendChild(mainDiv)
}

// Recieve messages 
socket.on('message', (msg) => {
    appendMessage(msg, 'incoming')
    scrollToBottom()
})

function scrollToBottom() {
    messageArea.scrollTop = messageArea.scrollHeight

}