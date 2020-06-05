let url = 'https://api.lyrics.ovh/v1';

let client = new LyricsClient(url);

document.querySelector(".button").addEventListener("click", function () {
    let keyword = document.querySelector(".artist-input").value;
    let second = document.querySelector(".title-input").value;
    client.search(keyword, second);
});

document.querySelector(".dark-mode-button").addEventListener('click', function(e){
    document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "white";
            document.querySelector(".nav-bar").style.backgroundColor = "#686868";
                document.querySelector(".a").style.color = "white";
                     document.querySelector(".t").style.color = "white";
                         document.querySelector(".l").style.color = "white";
                             e.target.style.backgroundColor = "greenyellow";
                                document.querySelector(".response-elements").style.color = "white";
                                    document.querySelector(".dark-mode-button-2").style.backgroundColor = "white";
                                        document.querySelector(".dark-mode-button-2").style.color = "dimgray";
                                            document.querySelector("#first-part").style.backgroundColor = "#101010";
});

document.querySelector(".dark-mode-button-2").addEventListener('click', function(e){
    document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.color = "black";
            document.querySelector(".nav-bar").style.backgroundColor = "#ADFF2F";
                document.querySelector(".a").style.color = "black";
                    document.querySelector(".t").style.color = "black";
                        document.querySelector(".l").style.color = "black";
                            e.target.style.backgroundColor = "greenyellow";
                                e.target.style.color = "white";
                                    document.querySelector(".dark-mode-button").style.backgroundColor = "dimgray";
})


    document.querySelector(".lyrics-button").addEventListener('click', function(){
        let keyword = document.querySelector(".lyrics-input").value;
        let found = search_keyword(keyword);
        document.querySelector(".promo-text").style.display = "none";
        for (let i = 0; i < found.length; i++) {
            if(found.length > 0) {
                let track_container = document.createElement("div", {'class': "tracks-cotnainer"});
                let header = document.createElement("h1", {'class': "clickable-h1"});
                header.innerHTML = `${found[i].artist.toUpperCase()}`;
                let song_title = document.createElement("h1", {'class': "song-title"});
                song_title.innerHTML = `${found[i].title.toUpperCase()}`
                let lyrics_button = document.createElement("h3", {'class': "clickable-button"});
                lyrics_button.innerHTML = "▼";
                lyrics_button.setAttribute("style", "color:dimgray; margin-left:80px;")
                let hide_button = document.createElement("h3", {'class': "hide-button"});
                hide_button.setAttribute("style", "color:dimgray; margin-left:80px;")
                hide_button.innerHTML = ""
                track_container.appendChild(header);
                track_container.appendChild(song_title);
                track_container.appendChild(lyrics_button);
                track_container.appendChild(hide_button);
                lyrics_button.addEventListener('click', function(e){
                    e.target.innerHTML = "";
                    let song_lyrics = document.createElement("p", {'class': "ep"});
                    song_lyrics.innerHTML = `${found[i].lyrics.split("\n").join("<br/>")}`;
                    hide_button.innerHTML = "▲";
                    track_container.appendChild(song_lyrics);
                    hide_button.addEventListener('click', function(e){
                        song_lyrics.innerHTML = "";
                        lyrics_button.innerHTML = "▼";
                        e.target.innerHTML = "";
                    })
                })
                document.querySelector(".promo-container").appendChild(track_container)
              } else {
                alert("Not found");
              }
        }
        
    });

search_keyword = (keyword) => {

  let results = [];
  for(let i=0; i<localStorage.length; i++) {
     let keyname = localStorage.key(i)  // lyrics_Reminder
     if(keyname.startsWith("lyrics_")) {
        let record = localStorage.getItem(keyname); 
        let entry = JSON.parse(record); //Object: {title: Reminder, artist: The Weeknd, lyrics: "Song lyrics goes here"}
        if(entry.lyrics.toLowerCase().indexOf(keyword) > -1) { // "song lyrics goes here".indexOf("lyrics")
          results.push(entry);
        } 
     }
  }
  return results;
}






