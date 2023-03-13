// import balilogo from '../Images/balilogo_2.svg';
import Companies from './Companies.json';

export const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

export const brands = Object.keys(Companies).map((item)=>item);

export const usernames = ['flipwrists', 'drigk', 'santa', 'gregg', 'sammy', 'retail'];

export const types = ['Buying', 'Selling', 'Trading', 'Selling/Trading'];

export const blades = ['Live', 'Trainer', 'Parts'];

export const sorts = ['Minimum', 'Maximum', 'New', 'Old'];

export const conditions = ["1+", "2+", "3+", "4+", "5+", "6+", "7+", "8+", "9+", "10"];

export const statuses = ['Available', 'Pending', 'Sold', 'Traded'];

export const pageTitles = {
    // '/': <img alt="Sale" style={{maxWidth:"170px", maxHeight:"170px", display:"inline"}} src={balilogo} />,
    '/': 'Home',
    '/profile': 'Profile',
    '/settings': 'Settings',
    '/createPost': 'Create',
    '/contactUs': 'Contact',
    '/aboutUs': 'About',
    '/discuss': 'Discussions',
    '/singlePost': 'User Post'
};

export const priceColors = (type) => {
    switch(type) {
        case('wts'):
            return 'red';
        case('wtb'):
            return 'green';
        default:
            return 'black';
    };
};