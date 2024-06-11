import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'RoadMate',
        description: "Me and my team built a mobile application akin to Uber, Careem, or inDrive, enabling users to book rides and parcel deliveries efficiently",
        tools: ['Native', 'MongoDB', 'Google Maps', 'Stripe', 'RESTFUL API', 'Figma', 'Socket.io', 'Google-Auth'],
        role: 'Software Engineer',
        code: '',
        demo: ' https://snappromise.com ',
        image: crefin,
    },
    {
        id: 2,
        name: 'Snap Promise (Website and Mobile App)',
        description: 'Me and my team built a have designed and developed a full-stack website and mobile (Android/IOS) app. A comprehensive project aimed at developing a web application using Angular 16 and a mobile app using React Native, designed to provide users with innovative features and a seamless experience',
        tools: ['AngularJS', 'Material UI', "Google Auth", 'Braintree', 'ChartJs', 'Native', 'MongoDB', 'Stripe', 'RESTFUL API', 'Figma',],
        role: 'Software Engineer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'DPO',
        description: 'A web application enabling users to offer available parking spaces for vehicle owners, facilitating convenient and accessible parking solutions. ',
        tools: ['Wordpress', 'CSS', 'HTML', 'Javascript', 'Plugins'],
        code: '',
        role: 'Software Engineer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Instant Space',
        description: "Web app with user, manager, truck driver & service provider roles, enables truck drivers to add trucks & managers to manage providers. ",
        tools: ['ReactJS', 'Material UI', 'Redux', 'Google Maps', 'Stripe', "Calendar", 'Socket.io', 'Google-Auth'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Wordpress Developer',
    },
    {
        id: 5,
        name: 'Grow & Share',
        description: "It is a dynamic web application that facilitates seamless interaction between retailers and consumers. The platform was designed to cater to two distinct user categories: retailers and consumers, fostering a collaborative ecosystem.  ",
        tools: ['ReactJS', 'Admin-Panel', 'Material UI', 'React-Redux', 'Google Maps', 'Stripe', "Calendar", 'Socket.io', 'Google-Auth', 'Slider'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Software Engineer',
    },
    {
        id: 6,
        name: 'DINX ',
        description: "A  WordPress-based web application offering software development, training, sales, and marketing technologies. ",
        tools: ['Wordpress', 'CSS', 'HTML', 'Javascript', 'Plugins'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Wordpress Developer',
    },
    {
        id: 7,
        name: 'Aljazeera ',
        description: "The Securities & Exchange Commission of Pakistan is the financial regulatory agency in Pakistan whose objective is to develop a modern and efficient corporate sector and a capital market based on sound authority principles, to encourage investment and foster economic growth and prosperity in Pakistan.",
        tools: ['NextJS', 'CSS', 'HTML', 'Tailwind', 'Postman', 'Resuable-components', 'Dark-Mode'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Software Engineer',
    },
    {
        id: 8,
        name: 'Sparacino CRM ',
        description: "It is a dashboard to track the records of all processed Properties and showing the records in the form of Geo Location. Users can see Each Property on the Map with all its data. Agents can create Leads and do Campaigns. ",
        tools: ['MapBox', 'Geolocation API', 'React', 'React-redux', 'Postman', 'Resuable-components'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Software Engineer',
    }
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },