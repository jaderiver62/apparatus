const { User, Post } = require('../models');

// I created unique dummy information to seed the site so people can do a demo and test the functionality


const userdata = [{
        username: 'ninajoy',
        email: 'ninajoy@gmail.com',
        password: 'test'
    },
    {
        username: 'allivee',
        email: 'allivee@yahoomail.com',
        password: 'test'
    },
    {
        username: 'lizzybush',
        email: 'lizzybush@gmail.com',
        password: 'test'
    },
    {
        username: 'amara',
        email: 'amara@smegs.net',
        password: 'test'
    },
    {
        username: 'chuckisgodd',
        email: 'chuckisgodd@godly.com',
        password: 'test'
    },
    {
        username: 'notmoose',
        email: 'deanwinchester@gmail.com',
        password: 'test'
    },
    {
        username: 'sammywins',
        email: 'sam.winchester@hunter.com',
        password: 'test'
    },
    {
        username: 'bobby',
        email: 'idjuts@jadoomail.com',
        password: 'test'
    },
    {
        username: 'pamelaposts',
        email: 'pam.barnes@google.au',
        password: 'test'
    },
    {
        username: 'buddhabelly',
        email: 'jadoos.secret@mailbot.com',
        password: 'test'
    }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;