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
        document.querySelector(".elements").innerHTML =  `
        <div class="h1-class">
            <h1 class="background">${art}</h1>
            <h1 class="background-two">${titl}</h1>
        </div>
         <div class="response-elements">
                    <p class="song-lyrics">${element.lyrics.split("\n").join("<br/>")}</p>
                </div>
                <style>
                    .response-elements {
                        margin-left: 70px;
                        margin-top: 20px;
                    }
                    .song-lyrics{
                        margin-top: -150px;
                    }
                    .h1-class {
                        margin-left: -600px;
                    }
                    h1 {
                        color: #ADFF2F;
                        font-size: 50px;
                    }
                </style>`;
    }

    search(keyword, second) {
        let url = `${this.url}/${keyword}/${second}`;
        
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                this.render_data_to_dom(data);
                let records = localStorage.getItem("lyrics");

                    if(records == undefined) {
                        records = [];
                    } else {
                        records = records.split(",");
                    }

                let record = {author: keyword, title: second, lyrics: data}
                    records.push(record)

                localStorage.setItem("lyrics", JSON.stringify(records));
                            }).catch(err => console.log(err.message));
    }
    search_lyrics(lKeyword) {
        if (lKeyword === "idk") {
            //for (let i =375; i < 390; i++) {
                console.log(localStorage.getItem('lyrics'));
            
            //}
        }
            
    }
}