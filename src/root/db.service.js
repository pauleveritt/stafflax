import db from 'json!../../var/db.json';

class Db {
    static $inject = ['$log'];


    constructor($log) {
        this.$log = $log;
        this.db = db;
    }

}

export default Db;
