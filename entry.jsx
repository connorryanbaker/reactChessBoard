import React from 'react';
import ReactDOM from 'react-dom'
import { Board } from './src/Board';
import PojoBoard from './src/PojoBoard';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const board = new PojoBoard();
  ReactDOM.render(<Board brd={board}/>, root);
})