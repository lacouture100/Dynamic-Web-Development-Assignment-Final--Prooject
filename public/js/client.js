const socket = io();

let connectedDevices = [];

socket.on('time', function (timeString) {

    let timeStamp = timeString;
    //socket.emit is not a cleint function
    try {
        socket.emit('webMsg', `Hello from webclient ${socket.id}`, 1000);

    } catch (error) {
        console.log(error)
    }

    while (!connectedDevices.includes(socket.id)) {
        connectedDevices.push(socket.id);

        //console.log(`${socket.id} Connected!`)
        //Create a a header with the connected socket ID 
        let connectedContainer = document.createElement('div');
        let connectedStatus = document.createElement('p');
        connectedStatus.textContent = `${socket.id} Connected!`;
        //Create the class and unique id for each socket.
        connectedStatus.setAttribute('class', 'connected__status');
        connectedStatus.setAttribute('id', `${socket.id}__status`);
        //Append the created tag to the body
        document.body.appendChild(connectedContainer);
        connectedContainer.appendChild(connectedStatus)


        el = document.createElement("p");
        el.textContent = timeString;
        connectedStatus.append(el);
    }

    socket.on("disconnected", function (removeEntry) {
        //get the socket info div
        const socketContainer = document.getElementById(`${socket.id}__status`);
        //remove the socket div
        socketContainer.remove();
    })
});

//Message from Raspberry Pi
socket.on('piMsg', function (message) {
    console.log(`Message from pi: ${message}`);
});