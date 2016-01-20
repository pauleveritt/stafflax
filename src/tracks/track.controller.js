class Controller {
    static $inject = ['$log', 'Db', 'Tracks', '$stateParams'];

    constructor($log, Db, Tracks, $stateParams) {
        this.$log = $log;
        this.Db = Db
        this.Tracks = Tracks;
        let name = $stateParams.name;
        this.track = Db.getItem('tracks')
        //Tracks.getBy('name', name)
        //    .then((track) => this.track = track);
    }

}

export default Controller;
