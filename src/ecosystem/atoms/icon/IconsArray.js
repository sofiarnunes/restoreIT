// Name: Sofia Nunes 
// Date: 22-10-2022
// Motive: array component with all the icons in the app

// MUI icons
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import CloseIcon from '@mui/icons-material/Close';


// imports
import { IconType } from '../../../enums/IconType';

export const IconsArray = [
    {
        id: IconType.hamIcon,
        label: 'open drawer',
        icon: <MenuIcon/>,
    },
    {
        id: IconType.instagramIcon,
        label: 'instagram',
        icon: <InstagramIcon/>,
    },
    {
        id: IconType.linkedinIcon,
        label: 'linkedin',
        icon: <LinkedInIcon/>,
    },
    {
        id: IconType.phoneIcon,
        label: 'phone',
        icon: <PhoneAndroidIcon/>,
    },
    {
        id: IconType.closeIcon,
        label: 'close',
        icon: <CloseIcon/>,
    },
]

