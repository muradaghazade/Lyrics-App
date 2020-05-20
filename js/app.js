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
    let lkeyword = document.querySelector(".lyrics-input").value;
    client.search_lyrics(lkeyword);
});
