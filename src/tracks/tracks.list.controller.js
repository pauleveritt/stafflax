class Controller {
    static $inject = ['$log', 'Tracks'];

    constructor($log, Tracks) {
        this.$log = $log;
        this.Tracks = Tracks;
        this.items = Tracks.list();
        this.newTrack = '';
    }

    addTrack() {
        let newTrack = {
            title: this.newTrack.trim()
        };
        this.Tracks.add(newTrack);
    }

    remove(track) {
        this.Tracks.remove(track);
    }


}

export default Controller;
