import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
    {id: 1, message: 'Hello guys', likesCount: 15},
    {id: 2, message: 'My name is Dima\'', likesCount: 15},
]

let dialogs = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Oleg'},
    {id: 3, name: 'Jenya'},
    {id: 4, name: 'Misha'},
    {id: 5, name: 'Andrey'},
]

let messages = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'Ok'},

]

ReactDOM.render(
  <React.StrictMode>
    <App  postsData={postsData}
          dialogs={dialogs}
          messages={messages}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
