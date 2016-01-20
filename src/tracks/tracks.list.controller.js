class Controller {
    static $inject = ['$log', 'Tracks', 'Db'];

    constructor($log, Tracks, Db) {
        this.$log = $log;
        this.Db = Db;
        this.items = Db.listTracks();
        $log.debug('ti44', this.items);
        //this.Tracks = Tracks;
        //this.items = Tracks.list();
    }

    remove(track) {
        this.Tracks.remove(track);
    }


}

export default Controller;
