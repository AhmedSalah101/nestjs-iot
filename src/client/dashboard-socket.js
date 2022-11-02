const socket = io('http://localhost:3000', {
  withCredentials: false,
});
const message = document.getElementById('message');
const messages = document.getElementById('messages');

const handleSubmitNewMessage = () => {
  console.log(message.value);
  socket.emit('message', { data: message.value });
};

socket.on('message', ({ measurement }) => {
  handleNewMessage(measurement);
});

const handleNewMessage = (message) => {
  messages.appendChild(buildNewMessage(message));
};

const buildNewMessage = (message) => {
  const li = document.createElement('li');
  console.log(message);
  li.appendChild(document.createTextNode(message.value));
  return li;
};
