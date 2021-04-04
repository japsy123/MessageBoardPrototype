const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const channels = [
    {
        id: 1,
        channelName: 'Mental health',
        channelContent:[]
    },
    {
        id: 2,
        channelName: 'Social',
        channelContent:[]
    },
    {
        id: 3,
        channelName: 'Random',
        channelContent:[]
    }
]

app.get("/messages/:id", (req,res)=> {
    res.json(channels[req.params.id]);

});

app.get("/channels", (req, res) => {
    res.json(channels);
  });


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});