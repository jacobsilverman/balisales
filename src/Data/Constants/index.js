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

export const environment = () => {
    let environment = process.env.REACT_APP_ENVIRONMENT;
    const url = window.location.href;

    if (url.includes('environment=development')) {
        environment = 'development';
    }

    return environment;
}

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

export const dateFormatter = (startDate) => {
    const difference = new Date() - startDate

    //Arrange the difference of date in days, hours, minutes, and seconds format
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    if (days > 0) {
        return days + " days"
    } else if (hours > 0) {
        return hours + " hours"
    } else if (minutes > 0) {
        return minutes + " minutes"
    }
    return seconds + " seconds"
}

export const stringToColour = (str) => {
    let hash = 0;
    str.split('').forEach(char => {
      hash = char.charCodeAt(0) + ((hash << 5) - hash)
    })
    let colour = '#'
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff
      colour += value.toString(16).padStart(2, '0')
    }
    return colour
  }