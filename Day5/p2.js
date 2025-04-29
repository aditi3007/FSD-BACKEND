const express = require('express');
const app = express();
app.use(express.json());
let users = [
    {id:1,name: 'John Doe', age: 30},
    {id:2,name: 'Jane Smith', age: 28},
    {id:3,name: 'Alice Johnson', age: 35}
];
app.get('/users', (req, res) => {
});
app.post('/reg', (req, res) => {
    const newUser = req.body;
    const newid = users.length > 0? users[users.length-1].id + 1 : 1;
    newUser.id = newid;
    users.push(newUser);
    res.json(newUser);
});
app.listen(9000, () => {
    console.log('Server is running on port 9000');
});