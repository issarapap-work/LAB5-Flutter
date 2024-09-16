const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/getdata', async (req, res) => {
    res.json({ msg: req.query.msg })
    });
app.post('/lab05', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    res.json({ username: username, password: password })

})
app.listen(8000, () => {
    console.log('Start server on port 3000');
});
