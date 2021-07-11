async function getData(value) {



    let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + value, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "f7514e5f85msha0614e29b2c02d1p16d98djsn7f4bffa38c9b",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
    })
    let data = await response.json()
    let realData = data.data;
    console.log(data);
    total.textContent = data.total
    
    console.log(data.total);
    realData.map((element) => {
        let songSingerName = element.artist.name
        let songTitle = element.title
        let songLink = element.link
        let songSingerImage = element.artist.picture_big
        let songCoverPhoto = element.album.cover_big
        let song = element.preview
        
        let li = document.createElement('li')
        let h3 = document.createElement('h3')
        let a = document.createElement('a')
        let div = document.createElement('div')
        let img = document.createElement('img')
        let h2 = document.createElement('h2')
        let audio = document.createElement('audio')
        let source = document.createElement('source')
        
        // total.textContent = 'Total: '+ data.total
        h2.textContent = 'Songer: ' +songSingerName
        h3.textContent = songTitle
        
        
        a.textContent = 'Full song'
        a.setAttribute('href', songLink)
        
        img.setAttribute('src', songSingerImage)
        img.setAttribute('alt', 'rasm')
        
        audio.controls = true
        
        li.style.backgroundImage = `url(${songCoverPhoto})`
        source.setAttribute('src', song)
        source.setAttribute('type', 'audio/mp3')
        
        audio.appendChild(source)
        div.appendChild(img)
        div.appendChild(h2)
        div.appendChild(audio)
        li.appendChild(h3)
        li.appendChild(a)
        li.appendChild(div)
        
        songlist.appendChild(li)
        
        
    })
    // songlist.innerHTML = null
    // console.log(total);


}


finder.onclick = () => {
    if (input.value != '') {
        getData(input.value)
    }
}