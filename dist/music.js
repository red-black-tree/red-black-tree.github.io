const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
        {
            name: 'Never Gonna Give You Up',
            artist: 'Rick Astley',
            url: 'https://music.163.com/song/media/outer/url?id=5221167.mp3',
            cover: 'https://p1.music.126.net/kOOJVk0TQEEIWGPdJv_cHQ==/18180424766089296.jpg?param=130y130'
        }
    ]
})
