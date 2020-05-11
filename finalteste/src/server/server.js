const express = require('express')

const app = express();

app.get('/', (req, res) => {
    const user = {
        name: 'x',
        hobby: 'fishing'
    }
    res.send(user)
})
app.listen(3000)


