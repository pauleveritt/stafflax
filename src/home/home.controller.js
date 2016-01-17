class Controller {
    static $inject = ['$log', 'FBURL', '$firebaseObject'];
    constructor($log, FBURL, $firebaseObject) {
        this.$log = $log;
        var ref = new Firebase(FBURL);
        this.items = $firebaseObject(ref);
        $log.debug('this.items', this.items);

        this.items.first = {id: 1, title: 'First'};
        this.items.$save();
    }
}

export default Controller;
