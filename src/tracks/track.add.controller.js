class Controller {
    static $inject = ['$log', 'Tracks', '$state'];

    constructor($log, Tracks, $state) {
        this.$log = $log;
        this.Tracks = Tracks;
        this.$state = $state;
    }

    add(title) {
        let newTrack = {
            title: title.trim()
        };
        this.Tracks.add(newTrack)
            .then(() => this.$state.go('tracks.list'));
    }
}

export default Controller;
