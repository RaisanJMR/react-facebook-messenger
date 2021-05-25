import React, { useState, useEffect } from 'react';
// import { Button } from '@material-ui/core';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Message from './Message';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { username: 'sonny', text: 'hey guys' },
    { username: 'raisan', text: 'hello guys' },
    { username: 'qazi', text: 'hoi!! boys' },
  ]);
  const [username, setUsername] = useState('');
  console.log(username);
  useEffect(() => {
    setUsername(prompt('please enter your name'));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, { username: username, text: input }]);
    setInput('');
  };

  return (
    <div className="App">
      <h1>Facebook messenger Clone with reactJS 🚀🚀 firebase</h1>
      <h2>Welcome {username}</h2>
      <form>
        <FormControl>
          <InputLabel>Enter message</InputLabel>
          <Input
            type="text"
            value={input}
            onChange={({ target }) => {
              setInput(target.value);
            }}
          />
          <Button
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            Send Message
          </Button>
        </FormControl>
      </form>
      {messages.map((message, index) => (
        <Message username={username} message={message} key={index} />
      ))}
    </div>
  );
}

export default App;
