const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

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
        metaName: channelEnum.social,
        content: []
    },
    {
        id: 3,
        channelName: 'Random',
        metaName: channelEnum.random,
        content: []
    }
]

const channelContent = {
    'mentalHealth': [{ creatorId: '', message: ''}],
    'social': [{ creatorId: '', message: ''}],
    'random': [{ creatorId: '', message: ''}]
}

app.get("/messages/:channel", (req,res)=> {
    res.json(channelContent[req.params.channel]);

});

app.get("/channels", (req, res) => {
    res.json(channels);
  });


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});