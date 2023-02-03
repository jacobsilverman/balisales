// import balilogo from '../Images/balilogo_2.svg';

export const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

export const brands = ['baliplus', 'squid', 'kershaw', 'bradley', 'brs', 'mw', 'bbbarfly', 'hom', 'bm', 'bs', 'jk', 'nrb', 'svix', 'heibel', 'hypex', 'glidrco', 'mantis', 'theone', 'fellowship', 'biegler', 'flytanium', 'misc'];

export const usernames = ['flipwrists', 'drigk', 'santa', 'gregg', 'sammy', 'retail'];

export const types = ['wts', 'wtt', 'wtb'];

export const blades = ['live', 'trainer', 'parts'];

export const sorts = ['min', 'max'];

export const viewCounts = [1, 2, 3, 4, 6, 12];

export const statuses = ['available', 'pending', 'sold', 'traded'];

export const pageTitles = {
    // '/': <img alt="Sale" style={{maxWidth:"170px", maxHeight:"170px", display:"inline"}} src={balilogo} />,
    '/': 'Home',
    '/profile': 'Profile',
    '/settings': 'Settings',
    '/account': 'Your Posts',
    '/createPost': 'Create',
    '/contactUs': 'Contact Us',
    '/aboutUs': 'About Us',
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