import React from 'react';
import photo from '../../photo.png';
import profile from '../../style/profilephoto.css'



const profilephoto = () => {
    return (
        <div className ={profile}>
        
        <img src={photo} alt="profile"/>

        </div>

    );

};

export default profilephoto;