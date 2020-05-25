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

    if(found.length > 0) {
      document.querySelector("#second-part").innerHTML = `
      <div class="about-track">
      <h1>${found[0].artist.toUpperCase()}</h1>
      <h1>${found[0].title.toUpperCase()}</h1>
      <p>${found[0].lyrics.split("\n").join("<br/>")}</p>
      </div>
        <style>
             h1 {
                color: #00FF00;
                }
        </style>
      `
    } else {
      alert("Not found");
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






