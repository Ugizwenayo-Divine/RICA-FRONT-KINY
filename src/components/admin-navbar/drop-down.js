import React from 'react';
import {Link} from 'react-router-dom';
import './admin-navbar.css';

const dropDown =(props)=>{
    const {visibility,details,hover,unHover} = props;
    let top='';
    if(props.home){
      top='16%';
    }
    else{
      top='-3%';
    }
    return(
      <div 
      className='drop-down'
      style={{visibility:visibility,left:`${props.coordinates}%`,
      marginTop: top}}
      onMouseOver={hover}
      onMouseOut={unHover}>
        <ul>
          {details.map(dt=><li key={dt}><Link to={dt === 'Ibishushanyo'?`/${props.action}design`:dt === 'Igenzura'?`/${props.action}study`:`/${props.action}${dt}`} 
          style={{color: 'white',textDecoration:'none'}} 
          activestyle={{color: 'red'}}
          >{dt}</Link></li>)}
        </ul>
      </div>

    )
}
export default dropDown;