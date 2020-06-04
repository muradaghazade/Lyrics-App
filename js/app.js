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
                let header = document.createElement("h1", {'class': "clickable-h1"});
                header.innerHTML = `${found[i].artist.toUpperCase()}`;
                let song_title = document.createElement("h1", {'class': "song-title"});
                song_title.innerHTML = `${found[i].title.toUpperCase()}`
                document.querySelector(".promo-container").appendChild(header);
                document.querySelector(".promo-container").appendChild(song_title);
                document.querySelector(".promo-container").addEventListener('click', function(e){
                    let song_lyrics = document.createElement("p", {'class': "ep"});
                    song_lyrics.innerHTML = `${found[i].lyrics.split("\n").join("<br/>")}`;
                    e.target.appendChild(song_lyrics);
                })
                // document.querySelector("#second-part").innerHTML += `
                //     <div class="about-track">
                //     <h1 class="clickable-h1">${found[i].artist.toUpperCase()}</h1>
                //     <h1>${found[i].title.toUpperCase()}</h1>
                //     <p class="ep"></p>
                //     </div>
                //       <style>
                //           h1 {
                //               color: #00FF00;
                //               }
                //       </style>
                //     `
              } else {
                alert("Not found");
              }
        }
        
    });
    // document.addEventListener('click', function(e){
    //     if(e.target.className == 'clickable-h1'){
    //         document.querySelector(".ep").innerHTML = `
    //         <p>${found[i].lyrics.split("\n").join("<br/>")}</p>
    //         `
    //     }
    // })

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






