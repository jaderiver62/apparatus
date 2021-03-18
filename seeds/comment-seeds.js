const { Comment } = require('../models');


// I created unique dummy information to seed the site so people can do a demo and test the functionality


const commentdata = [{
        comment_text: 'Viverra aliquet eget sit amet tellus cras adipiscing enim. Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum.',
        user_id: 6,
        post_id: 1
    },
    {
        comment_text: 'Dui sapien eget mi proin sed libero enim.',
        user_id: 6,
        post_id: 8
    },
    {
        comment_text: 'Libero id faucibus nisl tincidunt eget nullam. ',
        user_id: 3,
        post_id: 10
    },
    {
        comment_text: 'Nunc id cursus metus aliquam eleifend mi. Quam nulla porttitor massa id neque aliquam vestibulum. Adipiscing bibendum est ultricies integer quis auctor elit. Vitae turpis massa sed elementum. ',
        user_id: 3,
        post_id: 18
    },
    {
        comment_text: 'Condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Dolor sit amet consectetur adipiscing elit duis. ',
        user_id: 7,
        post_id: 5
    },
    {
        comment_text: 'Senectus et netus et malesuada fames ac turpis egestas integer.',
        user_id: 1,
        post_id: 20
    },
    {
        comment_text: 'Aliquam ut porttitor leo a diam sollicitudin tempor id. ',
        user_id: 6,
        post_id: 7
    },
    {
        comment_text: 'Enim facilisis gravida neque convallis. Purus sit amet luctus venenatis lectus magna fringilla urna. Diam vel quam elementum pulvinar etiam non. Sociis natoque penatibus et magnis dis. Eget aliquet nibh praesent tristique magna sit. Nisl suscipit adipiscing bibendum est ultricies integer.',
        user_id: 7,
        post_id: 4
    },
    {
        comment_text: 'Vel facilisis volutpat est velit egestas dui. Vitae justo eget magna fermentum iaculis eu non. Tortor vitae purus faucibus ornare suspendisse sed. Nibh ipsum consequat nisl vel pretium lectus quam id. Leo urna molestie at elementum eu facilisis sed. Consequat semper viverra nam libero justo laoreet sit amet cursus. ',
        user_id: 6,
        post_id: 12
    },
    {
        comment_text: 'Nibh ipsum consequat nisl vel pretium',
        user_id: 6,
        post_id: 20
    },
    {
        comment_text: 'Consequat semper viverra nam libero justo laoreet sit amet cursus. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. ',
        user_id: 3,
        post_id: 14
    },
    {
        comment_text: 'Convallis aenean et tortor at risus viverra. Turpis massa tincidunt dui ut ornare lectus sit. Id consectetur purus ut faucibus. Vel facilisis volutpat est velit. Sed elementum tempus egestas sed sed risus pretium quam. Magna fringilla urna porttitor rhoncus dolor purus non enim. A scelerisque purus semper eget duis at tellus. ',
        user_id: 5,
        post_id: 4
    },
    {
        comment_text: 'Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Et ligula ullamcorper malesuada proin. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Magna eget est lorem ipsum dolor.',
        user_id: 4,
        post_id: 9
    },
    {
        comment_text: 'Enim neque volutpat ac tincidunt vitae. Ultrices neque ornare aenean euismod elementum nisi quis. ',
        user_id: 5,
        post_id: 14
    },
    {
        comment_text: 'Cras tincidunt lobortis',
        user_id: 6,
        post_id: 2
    },
    {
        comment_text: 'Et ligula ullamcorper malesuada proin. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Magna eget est lorem ipsum dolor. Enim neque volutpat ac tincidunt vitae. ',
        user_id: 8,
        post_id: 2
    },
    {
        comment_text: ' Ultrices neque ornare aenean euismod elementum nisi quis. ',
        user_id: 2,
        post_id: 20
    },
    {
        comment_text: ' Eget nullam non nisi est sit. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus. ',
        user_id: 4,
        post_id: 11
    },
    {
        comment_text: 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
        user_id: 5,
        post_id: 13
    },
    {
        comment_text: 'Egestas pretium aenean pharetra magna ac placerat. Lorem mollis aliquam ut porttitor leo a diam sollicitudin. Id cursus metus aliquam eleifend. Et tortor at risus viverra adipiscing. Nam libero justo laoreet sit amet. Massa tincidunt dui ut ornare lectus sit. Iaculis at erat pellentesque adipiscing commodo. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Porttitor lacus luctus accumsan tortor posuere ac ut consequat.',
        user_id: 9,
        post_id: 16
    },
    {
        comment_text: 'NOPE',
        user_id: 6,
        post_id: 4
    },
    {
        comment_text: 'YEP, ^^^This',
        user_id: 4,
        post_id: 10
    },
    {
        comment_text: 'Magna eget est lorem ipsum dolor. ',
        user_id: 3,
        post_id: 8
    },
    {
        comment_text: 'Cras tincidunt lobortis',
        user_id: 8,
        post_id: 10
    },
    {
        comment_text: 'Got it',
        user_id: 1,
        post_id: 15
    },
    {
        comment_text: 'Ut tortor pretium viverra',
        user_id: 5,
        post_id: 3
    },
    {
        comment_text: 'Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque.',
        user_id: 1,
        post_id: 15
    },
    {
        comment_text: 'Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. ',
        user_id: 4,
        post_id: 16
    },

];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;