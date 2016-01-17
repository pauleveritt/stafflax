class Tracks {
    static $inject = ['$log', 'FBURL', '$firebaseArray'];

    constructor($log, FBURL, $firebaseArray) {
        this.$log = $log;
        let ref = new Firebase(FBURL + 'tracks');
        this.items = $firebaseArray(ref);
    }

    list() {
        return this.items;
    }

    add(newTrack) {
        newTrack.name = newTrack.title.toLowerCase().replace(/\s/g, '-');
        this.items.$add(newTrack);
    }

    getName (name) {
        return this.items.find(track => track.name === name);
    }

    remove (track) {
        this.items.$remove(track);
    }

}

export default Tracks;
