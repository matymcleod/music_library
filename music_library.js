const library = {
       tracks: { 
              t01: { id: "t01",
                     name: "Code Monkey",
                     artist: "Jonathan Coulton",
                     album: "Thing a Week Three" },
              t02: { id: "t02",
              name: "Model View Controller",
              artist: "James Dempsey",
                     album: "WWDC 2003"},
                     t03: { id: "t03",
                     name: "Four Thirty-Three",
                     artist: "John Cage",
                     album: "Woodstock 1952"}
},
       playlists: { 
              p01: { id: "p01",
                     name: "Coding Music",
                     tracks: ["t01", "t02"]
              },
              p02: { id: "p02",
                     name: "Other Playlist",
                     tracks: ["t03"]
              }
       }
};

// generates a unique id
generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
     
// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
       for (let playlist in library.playlists) {
              console.log(`printPlaylists:: ${library.playlists[playlist].id}: ${library.playlists[playlist].name} - ${library.playlists[playlist].tracks.length} track(s)`);
       }
   };

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
       for(let track in library.tracks) {
              console.log(`printTracks:: ${library.tracks[track].id}: ${library.tracks[track].name} by ${library.tracks[track].artist} (${library.tracks[track].album})`);
       }
  };

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
       for(let playlistTracks of library.playlists[playlistId].tracks) {
              const{id, name, artist, album}= library.tracks[playlistTracks];
              console.log(`printPlaylist:: ${id} ${name} ${artist} ${album}`);
       }
};

// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
       if (library.tracks[trackId] && library.playlists[playlistId]){
              library['playlists'][playlistId]['tracks'].push(trackId)
       }
};



// adds a track to the library
const addTrack = function(name, artist, album) {
       const trackID = generateUid();
       // default "track" values. template object generates a new playlist with keys for id, name, artist and albums.
       let newTrack = {
              id: trackID, 
              name: name,
              artist: artist,
              album: album
       }
       library.tracks[trackID] = newTrack;
};


// adds a playlist to the library and generates a random ID passed in by the gereratUid function
const addPlaylist = function(name) {
       const playListID = generateUid();
       // template object generates a new playlist with keys for id, name and an array that stores tracks once pushed in.
       let newPlaylist = {
              id: playListID,
              name: name,
              tracks: []
       }
       // newPlaylist is added to the library
       library.playlists[playListID] = newPlaylist;
};

// function calls to add given arguments
printTracks();
printPlaylist("p02");
addTrackToPlaylist("t02", "p01");
addTrack("New", "New artist", "New Album");
addPlaylist("New Playlist");

// check log to confirm that new values are added to given sections
console.log("addTrackToPlaylist:: ", library.playlists);
console.log("addTrack:: ", library.tracks);
console.log("addPlaylist:: ", library.playlists);
