import React, { useState, useEffect } from 'react';
import FlipMove from 'react-flip-move';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Message from './Message';
import firebase from 'firebase';
import db from './firebase';
import Logo from './logo.svg';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    // {id: Math.floor(Math.random() * 100), username: 'sonny', message: 'hey guys' },
    // {id: Math.floor(Math.random() * 100), username: 'raisan', message: 'hello guys' },
    // {id: Math.floor(Math.random() * 100), username: 'qazi', message: 'hoi!! boys' },
  ]);
  const [username, setUsername] = useState('');
  // console.log(messages);
  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt('please enter your name'));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput('');
  };

  return (
    <div className="App">
      <img src={Logo} alt="logo" width="100" height="100"/>
      <h1>Facebook messenger Clone with reactJS 🚀🚀 firebase</h1>
      <h2>Welcome {username}</h2>
      <form className="app__form">
        <FormControl>
          <InputLabel>Enter message</InputLabel>
          <Input
            type="text"
            value={input}
            onChange={({ target }) => {
              setInput(target.value);
            }}
          />

 

          <IconButton
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon/>
          </IconButton>
        </FormControl>
      </form>
      {/* REACT FLIPMOVE */}
      <FlipMove>
        {messages.map(({id, message}) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>

    </div>
  );
}

export default App;
