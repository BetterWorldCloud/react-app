import './SeasonDisplay.css';
import React from 'react';

const getSeason = (lat) => {
    const month = new Date().getMonth();
    if (month > 2 && month < 9){
        if (getHemisphere(lat)){
            return 'Summer';
        }
        return 'Winter';
    }
    if (getHemisphere(lat)){
        return 'Winter';
    }
    return 'Summer';
}

function getHemisphere(lat){
    return lat > 0;
}

const seasonConfig = {
    Winter : {text: "Burr, it's chilly", icon: "snowflake icon"},
    Summer: {text: "let's hit the beach!", icon: "huge sun icon"}
}

const SeasonDisplay = (prop) => {
    console.log(prop);
    const season = getSeason(prop.lat);
    // const text_n_icon = season === "Winter" ? ["Burr, it's chilly", "snowflake icon"] : ["let's hit the beach!", "sun icon"]
    // To access text_n_icon values inside <div></div>....<div>text_n_icon[0]</div>, <div>text_n_icon[1]</div>
    //const icon = season === "Winter" ? "snowflake icon" : "sun icon";
    const ret = seasonConfig[season];
    // we can also use: const {text, icon} = seasonConfig[season];
    // and access with: <h1>{text}</h1>...

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive loading ${ret.icon}`}></i>
            <h1>{ret.text}</h1>
            <i className={`icon-right massive loading ${ret.icon}`}></i>
        </div>
    );
};


export default SeasonDisplay;