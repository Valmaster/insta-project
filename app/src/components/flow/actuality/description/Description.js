import React from 'react';

class Description extends React.Component {
  render() {
    return (
      <div className="item-flow-description">
        <div className="item-flow-interact">
          <i className="far fa-heart"></i>
          <i className="far fa-comment"></i>
          <i className="fas fa-share-alt"></i>
        </div>
        <div className="item-flow-liked-by">
          <p><i className="fas fa-user-circle"></i> Aimé par <b className="cursor-pointer">Benoît Jean</b> et <b className="cursor-pointer">856 autres personnes</b>.</p>
        </div>
        <div className="item-flow-content">
          <p><b className="cursor-pointer">Benoît Jean</b> Cartman est un personnage très drole mais très con. Retrouvez le dans la série South Park ! <a className="hashtag" href="#">#southpark</a><a className="hashtag" href="#">#cartman</a></p>
        </div>
        <div className="item-flow-createdAt">
          <p>Il y a 19 heures</p>
        </div>
      </div>
    )
  }
}

export default Description;
