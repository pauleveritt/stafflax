class Controller {
    static $inject = ['$log', 'Tracks', '$stateParams', '$state'];

    constructor($log, Tracks, $stateParams, $state) {
        this.$log = $log;
        this.Tracks = Tracks;
        this.$state = $state;
        let name = $stateParams.name;
        Tracks.getBy('name', name)
            .then((track) => this.track = track);

    }

    update() {
        this.track.$save()
            .then(() => this.$state.go('tracks.view', {name: this.track.name}));
    }
}

export default Controller;
