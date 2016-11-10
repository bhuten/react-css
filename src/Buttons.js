import React from 'react'
import style from './style.css'

class Buttons extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <button className={[style.button, style.createButton].join(' ')}>Create</button>
    );
  }
}
export default Buttons;
