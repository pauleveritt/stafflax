class Controller {
    static $inject = ['$log', 'Db'];

    constructor($log, Db) {
        this.$log = $log;
        this.Db = Db;
        this.items = this.Db.tracks();
    }

}

export default Controller;
