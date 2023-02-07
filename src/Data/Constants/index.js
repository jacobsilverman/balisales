// import balilogo from '../Images/balilogo_2.svg';

export const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

export const brands = ['baliplus', 'squid', 'kershaw', 'bradley', 'brs', 'mw', 'bbbarfly', 'hom', 'bm', 'bs', 'jk', 'nrb', 'svix', 'heibel', 'hypex', 'glidrco', 'mantis', 'theone', 'fellowship', 'biegler', 'flytanium', 'misc'];

export const usernames = ['flipwrists', 'drigk', 'santa', 'gregg', 'sammy', 'retail'];

export const types = ['Selling', 'Trading', 'Buying'];

export const blades = ['Live', 'Trainer', 'Parts'];

export const sorts = ['Minimum', 'Maximum'];

export const times = ["New", "Old"];

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