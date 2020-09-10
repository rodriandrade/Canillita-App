import React, { useEffect, useState } from 'react'
import axios from 'axios';

const WeatherData = (props) =>{

    const { data } = props;    
    const { main } = data;

    return(
        <div>
            {console.log(main)}
        </div>
    )

}

export default WeatherData