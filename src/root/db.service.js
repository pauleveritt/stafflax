import db from 'json!../../var/db.json';

class Db {
    static $inject = ['$log'];


    constructor($log) {
        this.$log = $log;
        this.db = db;
    }

    listTracks() {
        this.$log.debug('Db', this.db.tracks.defense);
        return db.tracks;
    }

}

export default Db;
