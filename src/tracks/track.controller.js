class Controller {
    static $inject = ['$log', 'Tracks', '$stateParams'];

    constructor($log, Tracks, $stateParams) {
        this.$log = $log;
        Tracks.list().$loaded(() => {
            this.track = Tracks.getName($stateParams.name);
        });
    }

}

export default Controller;
