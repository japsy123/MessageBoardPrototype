const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

const channelEnum = {
    'MentalHealth': 'mentalHealth',
    'Social': 'social',
    'Random': 'random'
}

const channels = [
    {
        id: 1,
        channelName: 'Mental Health',
        metaName: channelEnum.MentalHealth,
        content: []
    },
    {
        id: 2,
        channelName: 'Social',
        metaName: channelEnum.Social,
        content: []
    },
    {
        id: 3,
        channelName: 'Random',
        metaName: channelEnum.Random,
        content: []
    }
]

const channelContent = {
    'mentalHealth': [{ message: 'Hello I like this group'}],
    'social': [{ message: 'Any plans for tonight, guy???'}],
    'random': [{ message: 'Checkout this new game'},
    { message: 'Checkout this new game'},
    { message: 'Checkout this new game'}]
}

app.get("/messages/:channel", (req,res)=> {
    res.json(channelContent[req.params.channel]);

});

app.get("/channels", (req, res) => {
    res.json(channels);
  });

app.post('/:channel', (req,res)=> {
    const msg = req.body
    channelContent[req.params.channel].push(msg)
    res.send(channelContent[req.params.channel])
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});