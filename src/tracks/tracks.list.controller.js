class Controller {
    static $inject = ['$log', 'Tracks'];

    constructor($log, Tracks) {
        this.$log = $log;
        this.Tracks = Tracks;
        this.items = Tracks.list();
    }

    remove(track) {
        this.Tracks.remove(track);
    }


}

export default Controller;
