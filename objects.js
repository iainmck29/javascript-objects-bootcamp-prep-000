var playlist = {name:"title"};


function updatePlaylist(playlist, name, title) {
  playlist[name] = title;
  
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[name];
  return playlist;
}