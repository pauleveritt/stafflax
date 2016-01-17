class Controller {
    static $inject = ['$log', 'Tracks', '$stateParams'];

    constructor($log, Tracks, $stateParams) {
        this.$log = $log;
        this.Tracks = Tracks;
        let name = $stateParams.name;
        Tracks.getBy('name', name)
            .then((track) => this.track = track);
    }

}

export default Controller;
