class Controller {
    static $inject = ['$log', 'Tracks', '$stateParams'];

    constructor($log, Tracks, $stateParams) {
        this.$log = $log;
        this.Tracks = Tracks;
        Tracks.list().$loaded(() => {
            this.track = Tracks.getName($stateParams.name);
        });
    }

}

export default Controller;
