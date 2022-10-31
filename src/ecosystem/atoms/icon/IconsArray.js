// Name: Sofia Nunes 
// Date: 22-10-2022
// Motive: array component with all the icons in the app

// MUI icons
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// imports
import { IconType } from '../../../enums/IconType';

export const IconsArray = [
    {
        id: IconType.hamIcon,
        label: 'open drawer',
        icon: <MenuIcon/>,
    },
    {
        id: IconType.arrowDownIcon,
        label: 'arrow down',
        icon: <ArrowDropDownIcon/>,
    },
    {
        id: IconType.infoIcon,
        label: 'info',
        icon: <InfoIcon/>,
    },
    {
        id: IconType.settingsIcon,
        label: 'settings',
        icon: <SettingsIcon/>,
    },
    {
        id: IconType.closeIcon,
        label: 'close',
        icon: <CloseIcon/>,
    },
    {
        id: IconType.deleteIcon,
        label: 'delete',
        icon: <DeleteIcon/>,
    },
    {
        id: IconType.deleteIconSmall,
        label: 'delete small',
        icon: <DeleteIcon sx={{ fontSize: 20 }}/>,
    },
    {
        id: IconType.moreVerIcon,
        label: 'more vertical',
        icon: <MoreVertIcon/>,
    },
    {
        id: IconType.searchIcon,
        label: 'search',
        icon: <SearchIcon/>,
    },
    {
        id: IconType.arrowBackIcon,
        label: 'arrow back',
        icon: <ArrowBackIcon/>,
    },
    {
        id: IconType.keyboardArrowUpIcon,
        label: 'arrow up keyboard',
        icon: <KeyboardArrowUpIcon/>,
    },
    {
        id: IconType.keyboardArrowDownIcon,
        label: 'arrow down keyboard',
        icon: <KeyboardArrowDownIcon/>,
    },
    {
        id: IconType.arrowCircleLeftIcon,
        label: 'arrow circle left',
        icon: <ArrowCircleLeftIcon style={{fontSize: '40px'}}/>,
    },
    {
        id: IconType.arrowCircleRightIcon,
        label: 'arrow circle right',
        icon: <ArrowCircleRightIcon style={{fontSize: '40px'}}/>,
    },
    {
        id: IconType.cancelRoundedIcon,
        label: 'cancel rounded',
        icon: <CancelRoundedIcon />,
    },
    {
        id: IconType.arrowBackIosIcon,
        label: 'arrow back ios',
        icon: <ArrowBackIosIcon style={{fontSize: '20px'}}/>,
    },
    {
        id: IconType.arrowForwardIosIcon,
        label: 'arrow forward ios',
        icon: <ArrowForwardIosIcon style={{fontSize: '20px'}}/>,
    },
]

