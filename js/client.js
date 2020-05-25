class LyricsClient{
    constructor(url){
        this.url = url;
        this.state = {};
    }

    render(data) {
        console.log(data);
        document.querySelector(".main").innerHTML = data
                .map(movie=> this.render_data_to_dom(movie))
                .join("")
        
        
    }

    render_data_to_dom = (element) => {
        let art = document.querySelector(".artist-input").value.toUpperCase();
        let titl = document.querySelector(".title-input").value.toUpperCase();
        document.querySelector("#second-part").innerHTML =  `
        <div class="h1-class">
            <h1 class="background">${art}</h1>
            <h1 class="background-two">${titl}</h1>
        </div>
         <div class="response-elements">
                    <p class="song-lyrics">${element.lyrics.split("\n").join("<br/>")}</p>
                </div>
                <style>
                h1 {
                    color: #00FF00;
                }
                </style>`;
    }

    search(artist, title) {
        let url = `${this.url}/${artist}/${title}`;
        
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                this.render_data_to_dom(data);

                let entry = {
                    artist: artist,
                    title: title,
                    lyrics: data.lyrics
                }
                this.save_to_storage(title, entry);
            }).catch(err => console.log(err.message));
    }

    save_to_storage(key, data) {
        let k = `lyrics_${key}`;
        window.localStorage.setItem(k, JSON.stringify(data));
    }

}