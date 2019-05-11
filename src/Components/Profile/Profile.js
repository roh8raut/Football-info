import React from 'react';
import './Profile.css'

// let count = 0;
const Profile = (props) => {

    return (
        <div className="col-md-4 col-xs-6 col-sm-3 player-info">
            <img src={props.player.imageURL} alt="profile-pic" className="profile-pic" />
            <div className="info">
                <b>Name:</b ><span className="details">{props.player.fullName}</span><br />
                <b>Nationality:</b><span className="details">{props.player.nationality}</span><br />

                <b>Position:</b><span >{props.player.position}</span><br />

                <b>Jersey Number:</b><span>{props.player.shirtNumber}</span><br />

                <b>Age:</b><span >{props.player.age}</span>
            </div>
        </div>

    )

}

export default Profile;