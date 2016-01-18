class Controller {
    static $inject = ['$log'];
    constructor($log, FBURL, $firebaseObject) {
        this.$log = $log;
    }
}

export default Controller;
