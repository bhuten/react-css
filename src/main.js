console.log('Hello World!');
import React from 'react';
import ReactDOM from 'react-dom';
import Buttons from './Buttons';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Buttons),
    document.getElementById('mount')
  );
});
