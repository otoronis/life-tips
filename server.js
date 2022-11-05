const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

let tips = {
    'sleep': {
        'tip 1': 'get sunlight withing 30 mins of waking up',
        'tip 2': 'get sunlight before 9am if possible',
        'tip 3': 'get sunlight when the sun is setting or up to an hour before'
    },
    'plasticity' : {
        'tip 1': 'to be more alert in the morning, delay coffee and breakfast until 3 hours after waking up',
        'tip 2': 'if you are really alert don\'t listen to background music when studying',
        'tip 3': 'you naturally tend to work in 1.5 hour slots throughout the day starting from when you wake up'
    },
    'general' : {
        'tip 1': '',
        'tip 2': '',
        'tip 3': ''
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:topicChoice', (req, res) => {
    let topic = req.params.topicChoice.toLowerCase()
    if (tips[topic]) {
        res.json(tips[topic])
    } else {
        res.json(tips['general'])
    }  
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})