import React from 'react';
import ReactDOM from 'react-dom'
import { Board } from './src/Board';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const App = (props) => (
    <div>hola cunao!</div>
  )
  ReactDOM.render(<Board/>, root);
})