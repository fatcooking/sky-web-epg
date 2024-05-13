const playlist = [{
    name: 'earlyMorning',
    times: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
    songs:
        [
            "www/au/burger.mp3",
            "www/au/smw.mp3"
    ]
},
]

let nowPlaying = null;
const player = document.getElementById("player"); // Get Audio Element
player.autoplay = true;
player.volume = 0.2;

player.addEventListener("ended", function () {
    player.currentTime = 0; // Reset playback position to the beginning
    selectRandom(); // Select a new song
});

function selectRandom() {
    // Find the playlist entry for the current time
    const currentHour = new Date().getHours();
    const currentPlaylist = playlist.find(list => list.times.includes(currentHour));

    if (currentPlaylist) {
        // Filter out the currently playing song (if any)
        const filteredSongs = currentPlaylist.songs.filter(song => song !== nowPlaying);

        if (filteredSongs.length > 0) {
            // Pick a random song from the remaining songs
            const selection = filteredSongs[Math.floor(Math.random() * filteredSongs.length)];
            nowPlaying = selection; // Remember the last song
            player.src = selection; // Set the new song's location
            console.log(`Now playing ${selection}`);
        }
    }
}

selectRandom(); // Select initial song
player.play; // Start song
