import React from 'react';

const DescriptionActuality = ({actuality}) => {

    return (
        <div className="item-flow-description">
            <div className="item-flow-interact">
                <i className="far fa-heart"></i>
                <i className="far fa-comment"></i>
                <i className="fas fa-share-alt"></i>
            </div>
            <div className="item-flow-liked-by">
                <p><i className="fas fa-user-circle"></i> Aimé par <b className="cursor-pointer">Benoît
                    Jean</b> et <b className="cursor-pointer">856 autres personnes</b>.</p>
            </div>
            <div className="item-flow-content">
                <p>{actuality.description}</p>
            </div>
            <div className="item-flow-createdAt">
                <p>Créé le { actuality.created_at }</p>
            </div>
        </div>
    )
}


export default DescriptionActuality;
