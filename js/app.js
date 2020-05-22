let url = 'https://api.lyrics.ovh/v1';

let client = new LyricsClient(url);

document.querySelector(".button").addEventListener("click", function () {
    let keyword = document.querySelector(".artist-input").value;
    let second = document.querySelector(".title-input").value;
    document.querySelector(".lyrics-input").style.display = "none";
    document.querySelector(".lyrics-button").style.display = "none";
    client.search(keyword, second);
});

document.querySelector(".dark-mode-button").addEventListener('click', function(e){
    document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "white";
            document.querySelector(".nav-bar").style.backgroundColor = "gray";
                document.querySelector(".a").style.color = "white";
                     document.querySelector(".t").style.color = "white";
                         document.querySelector(".l").style.color = "white";
                             e.target.style.backgroundColor = "greenyellow";
                                document.querySelector(".response-elements").style.color = "white";
                                    document.querySelector(".dark-mode-button-2").style.backgroundColor = "white";
                                        document.querySelector(".dark-mode-button-2").style.color = "dimgray";
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






