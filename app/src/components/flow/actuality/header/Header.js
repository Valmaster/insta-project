import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="item-flow-header">
        <div className="item-flow-header-box">
          <div className="profile"><i className="fas fa-user-circle"></i></div>
          <div className="profile-name">
            <span>Cartman</span>
            <span>Troyes</span>
          </div>
        </div>
        <div className="profile-more-action">
          <p>...</p>
        </div>
      </div>
    )
  }
}

export default Header;
