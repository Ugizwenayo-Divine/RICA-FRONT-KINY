import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {Link} from 'react-router-dom';
import './landingFooter.css';

const landingFooter = () => {
    return(
        <div className='footer-container'>
            <div className='footer-left'>
                <h4 className='footer-head'>Serivise zabakiriya</h4>
                <p><Link to='/addrefund'>Kugarura</Link></p>
                <p><Link to='/addfeedback'>Ibitekerezo</Link></p>
            </div>
            <div className='footer-middle'>
                <h4 className='footer-head'>Ibyacu</h4>
                <div>RICA incorporation ni iduka rya elegitoronike rikora inama zubwubatsi 
                    <br/>
                    RICA iherereye i Kigali, KG523</div>
            </div>
            <div className='footer-right'>
            <h4 className='footer-head'>Twandikire</h4>
                <p>Telefone:+250780502050</p>
                <p>Imeri:ricainc@gmail.com</p>
                <p>Aho iherereye:kigali</p>
            </div>
            <div className='footer-social'>
                <div className='facebook'><a href='https://www.facebook.com/Ricainc.ltd'><FontAwesomeIcon icon={faFacebook}/></a></div>
                <div className='twitter'><a href='https://www.twitter.com/@rica_inc'><FontAwesomeIcon icon={faTwitter}/></a></div>
                <div className='instagram'><a href='https://www.instagram.com/ricainc.ltd'><FontAwesomeIcon icon={faInstagram}/></a></div>
                <hr style={{width:'100%'}}/>
            </div>
            <hr/>
            <div className='footer-copyright'>
                &copy; 2020 RICA INC. All rights reserved.
            </div>
        </div>  
    )
}

export default landingFooter;