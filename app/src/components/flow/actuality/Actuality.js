import './Actuality.css';
import React from 'react';
import HeaderActuality from './header/Header'
import DescriptionActuality from './description/Description'
import CommentActuality from './comment/Comment'

class Actuality extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
     <div className="actuality-flow">
        <div className="item-flow">
          <HeaderActuality />
          <div className="item-flow-image">
            <img src="./cartman.jpg" alt="Cartman" />
          </div>
          <DescriptionActuality />
          <CommentActuality />
        </div>
        <div className="item-flow">
          <HeaderActuality />
          <div className="item-flow-image">
            <img src="./cartman.jpg" alt="Cartman" />
          </div>
          <DescriptionActuality />
          <CommentActuality />
        </div>
        <div className="item-flow">
          <HeaderActuality />
          <div className="item-flow-image">
            <img src="./cartman.jpg" alt="Cartman" />
          </div>
          <DescriptionActuality />
          <CommentActuality />
        </div>
      </div>
    )
  }
}

export default Actuality;
