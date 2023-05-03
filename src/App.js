import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [message, setMessage] = useState('');
  const [chart, setChart] = useState('');

  function showText() {
    setMessage('Hello World');
  }

  return (
    <div>
      <button onClick={showText}>Click me</button>
      <p id="demo">{message}</p>
    </div>
  );
}
