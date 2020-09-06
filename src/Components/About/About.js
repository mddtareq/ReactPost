import React from 'react';
import './About.css'


const About = () => {
    const image = 'https://scontent.fdac23-1.fna.fbcdn.net/v/t1.0-9/56178713_2091410557638588_415842418680659968_o.jpg?_nc_cat=107&_nc_sid=174925&_nc_eui2=AeEqyhKolR1ZKuDCGBrWSnbmUWel8ENmDypRZ6XwQ2YPKvfDpQNwGUo78qLpxecfr4mL2OjdKs0LTHAGNJx-WqOK&_nc_ohc=c696fWsiIV0AX_VeXt4&_nc_ht=scontent.fdac23-1.fna&oh=6c78079ba9a1d8b552e0d754bb1ebc73&oe=5F78A9BC';
    return (
        <div className="about">
            <img src={image} alt="" />
            <h1>Mohammad Tareq</h1>
            <h3>Web Developer</h3>
        </div>

    );
};

export default About