import React, {useState} from 'react';
import { IconType } from '../../../enums/IconType';
import Icon from '../../atoms/icon/Icon';
import Text from '../../atoms/text/Text';

const Footer = () => {

    const [phoneOver, setPhoneOver] = useState(false);

    return (
        <div className='footer-bar-container'>
            <div style={{width:'10%', height: '100%', position: 'relative', left: '50%', transform: 'translateX(-50%)'}} className='flex-around'>
                <Icon id={IconType.instagramIcon} color='#fff'/>
                <a href="https://www.linkedin.com/in/margarida-faustino-38335a184/" target="_blank" rel="noopener noreferrer">
                    <Icon id={IconType.linkedinIcon} color='#fff' use={() => console.log('go to link')}/>
                </a>
                <Icon id={IconType.phoneIcon} color='#fff' useOver={() => setPhoneOver(true)} useOut={() => setPhoneOver(false)}/>
                {phoneOver ?
                    <div style={{position:'absolute', right: '-77%', top: '50%', transform: 'translateY(-50%)'}} className='appear'>
                        <Text txt='(+351) 919 636 532' stl='color-light small'/>
                    </div>
                : null}
            </div>
        </div>
    );
};

export default Footer;