const users =[
    {
        id:'1',
        name:'Mauricio',
        email: 'inojosa743@gmail.com',
        password: '123',
        role: 'ROLE_USER',
        state: true,
    },
    {
        id:'2',
        name:'Rodrigo',
        email: 'inojosa743@gmail.com',
        password: '123',
        role: 'ROLE_USER',
        state: true,
    }
];
const posts =[
    {
        id: 1,
        userId:1,
        title: 'Hello World',
        description: 'lorem ipsum',
        comments: [],
    },
    {
        id: 2,
        userId:2,
        title: 'Hello World',
        description: 'lorem ipsum',
        comments: [],
    },
    {
        id: 2,
        userId:1,
        title: 'Hello World',
        description: 'lorem ipsum',
        comments: [],
    }
];


module.exports={
    users,
    posts
};