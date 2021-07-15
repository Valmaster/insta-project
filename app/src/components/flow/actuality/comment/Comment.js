import React from 'react';

class Comment extends React.Component {
  render() {
    return (
      <div className="item-flow-comment">
        <div className="item-flow-comment-content">
          <div className="item-flow-comment-smile"><i className="far fa-smile"></i></div>
          <div className="item-flow-comment-input"><p>Ajouter un commentaire...</p></div>
        </div>
        <div>
          <p className="item-flow-comment-btn-publish">Publier</p>
        </div>
      </div>
    )
  }
}

export default Comment;
