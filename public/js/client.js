//Define global variables
let socket;
let value = 10;

//Wait for the socket connection to happen
async function connectSocket() {
    
    socket = io.connect('http://localhost:3000');
    console.log(socket)

    console.log(socket.id)
    console.log(socket)
}

connectSocket().then(
    socket.emit('message', value)
)
if (socket.connected == true) {
    let connectedContainer = document.createElement("div");
    //created the container for the category label
    let connectedStatus = document.createElement("h2");
    //set the class for each category label
    connectedStatus.setAttribute("class", "connected__status");
    //set the category label's unique id
    connectedStatus.setAttribute("id", `${socket.id}__status`);
    //Fill the label with text
    connectedStatus.textContent = `${socket.id} Connected!`;
    //append the category's title to it's container
    document.body.appendChild(connectedContainer);
    connectedContainer.appendChild(connectedStatus)
} else {
    console.log("Not connected")
    socket.emit('message', value)
}