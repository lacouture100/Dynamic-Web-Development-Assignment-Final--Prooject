const socket = io();
let el;
let value = 'hello server'

socket.on('time', function (timeString) {
    el = document.createElement("p");
    el.innerHTML = 'Server time: ' + timeString;
    document.body.append(el);
    if (!socket.connected) {
        console.log('No one is connected')
    } else {
        //console.log(`${socket.id} Connected!`)
        //Create a a header with the connected socket ID 
        let connectedContainer = document.createElement('div');
        let connectedStatus = document.createElement('h2');
        connectedStatus.textContent = `${socket.id} Connected!`;
        //Create the class and unique id for each socket.
        connectedStatus.setAttribute('class', 'connected__status');
        connectedStatus.setAttribute('id', `${socket.id}__status`);
        //Append the created tag to the body
        document.body.appendChild(connectedContainer);
        connectedContainer.appendChild(connectedStatus)
    }
});

//Message from Raspberry Pi
socket.on('piMsg', function (message) {
    console.log(`Message from pi: ${message}`);
});