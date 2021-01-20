const { response } = require('express');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //seriously, this is important

const songs = [
    {
        id: 1,
        title: "Drive My Car",
        artist: "The Beatles",
        album: "Rubber Soul",
        genre: "Folk Rock",
        releaseDate: "12/03/1965"
    },
    {
        id: 2,
        title: "Warsaw or the First Breath You Take After You Give Up",
        artist: "Them Crooked Vultures",
        album: "Them Crooked Vultures",
        genre: "Hard Rock",
        releaseDate: "09/02/2019"
    },
    {
        id: 3,
        title: "The Clincher",
        artist: "Chevelle",
        album: "This Type of Thinking Could Do Us In",
        genre: "Alternative Rock",
        releaseDate: "01/20/2005"
    }
];

app.get('/api/songs', (req, res) => {
    res.send(songs);

});

app.get('/api/songs/:id', (req,res) =>{
    const song = data.find(c => c.id === parseInt(req.params.id));
    if(!song) res.status(404).send('Song does not exist!');
    res.send(song);
})

app.post('/api/songs', (req,res) => {

    let song ={
        id: songs.length + 1,
        title: req.body.title,
        artist: req.body.artist,
        album: req.body.album,
        genre: req.body.genre,
        releaseDate: req.body.releaseDate
    }

    songs.push(song);
    res.send(songs);
});

// PORT
//export PORT=5000 to set the environment variable
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server started. Listening on port ${port}.`);
});
