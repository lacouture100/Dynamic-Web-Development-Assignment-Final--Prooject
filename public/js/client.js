const socket = io();
let connectedDevices = [];
let message = 'Hello from web client';
socket.emit('webMsg', `${message}`);


socket.on('connectedDevices', function (message) {
    console.log(message);
    connectedDevices = message;

    connectedDevices.forEach(element => {
        console.log(element)
    });
    /* 
        connectedDevices.filter(function (element) {
            return element.id != socket.id;
        });

        //If our array of devices includes this ID dont create a new DIV
        while (!connectedDevices.id.includes(socket.id)) {
            connectedDevices.push(socket.id);

            //console.log(`${socket.id} Connected!`)
            //Create a a header with the connected socket ID 
            let connectedContainer = document.createElement('div');
            let connectedStatus = document.createElement('p');
            connectedStatus.textContent = `${socket.id} Connected!`;
            //Create the class and unique id for each socket container.
            connectedStatus.setAttribute('class', 'device');
            connectedStatus.setAttribute('id', `device__${socket.id}`);
            //Create the class  for each socket status.
            connectedStatus.setAttribute('class', 'status');
            document.body.appendChild(connectedContainer);
            connectedContainer.appendChild(connectedStatus)


        }

        socket.on("disconnected", function (removeEntry) {
            //get the socket info div
            const socketContainer = document.getElementById(`device__${socket.id}`);
            //remove the socket container div
            socketContainer.remove();
        }) */
});


socket.on('time', function (timeString) {
    //receive the server timelog
    let timeStamp = timeString;
    //try to communicate with server
    //socket.emit('webMsg', `${message}`);
    //console.log('Message sent.')

    //Message from Raspberry Pi
    socket.on('piMsg', function (message) {
        //console.log(`Message from pi: ${message}`);
    });
});