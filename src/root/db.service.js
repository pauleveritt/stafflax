import db from 'json!../../var/db.json';

class Db {
    static $inject = ['$log'];


    constructor($log) {
        this.$log = $log;
        this._db = db;
    }

    tracks() {
        return this._db.tracks;
    }

}

export default Db;
