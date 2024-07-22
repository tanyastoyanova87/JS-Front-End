function songs(input) {

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    const typeListOfSong = input[input.length - 1];

    for (let song of input) {
        let [typeList, name, time] = song.toString().split('_');
        if (name != undefined) {
            songs.push(new Song(typeList, name, time));
            if (typeList === typeListOfSong || typeListOfSong === 'all') {
                console.log(name);
            }
        }
    }
}

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']

)
