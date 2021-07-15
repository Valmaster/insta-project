import './Profile.css';
import React from 'react';
import Header from '../header/Header';

class Profile extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="profile-information-box">
          <div className="profile-information-padding">
            <div className="element">
              <img src="./cartman.jpg" alt="Cartman" />
            </div>
            <div className="element">
              <div>
                <p className="profile-name">cartmansouthpark</p>
              </div>
              <div className="profile-publish-box">
                <p><b>800</b> publications</p>
                <p><b>14324</b> abonnés</p>
                <p><b>1503</b> abonnements</p>
              </div>
              <div className="profile-details-information">
                <p><b>Cartman Southpark</b></p>
                <p>Acteur & Dessin animé</p>
              </div> 
            </div>
          </div>
        </div>

        <div className="profile-personnal-publish-box">
          <div className="profile-publish-image-box">
            <hr/>
            ghjk
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;
