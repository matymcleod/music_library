// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
     
const library = {
tracks: { t01: { id: "t01",
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
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
       };

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
       for (let playlist in this.playlists) {
              console.log(`${this.playlists[playlist].id}: ${this.playlists[playlist].name} - ${this.playlists[playlist].tracks.length} track(s)`);
       }
   };

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
       for(let track in this.tracks) {
              console.log(`${this.tracks[track].id}: ${this.tracks[track].name} by ${this.tracks[track].artist} (${this.tracks[track].album})`);
       }
  };

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
       for(let playlistTracks of this.playlists[playlistId].tracks) {
              const{id, name, artist, album}= this.tracks[playlistTracks];
              console.log(`${id} ${name} ${artist} ${album}`);
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
       let newTrack = {
              id: trackID, 
              name: name,
              artist: artist,
              album: album
       }
       library.tracks[trackID] = newTrack;
};
addTrack("test1", "test2", "test3");

// adds a playlist to the library
const addPlaylist = function(name) {
       const playListID = generateUid();
       let newPlaylist = {
              id: playListID,
              name: name,
              tracks: []
       }
       library.playlists[playListID] = newPlaylist;

     };

addPlaylist("New Playlist");
addTrackToPlaylist("t01", "p02");
console.log(library.playlists)
console.log(library.tracks)