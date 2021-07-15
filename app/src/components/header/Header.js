import './Header.css';
import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <nav className="padding-left-menu navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand website-title" href="#">Instatata</a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#"><Link to="/"><i className="fas fa-home"></i></Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><Link to="/"><i className="fas fa-heart"></i></Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><Link to="/profile"><i className="fas fa-user-alt"></i></Link></a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;
