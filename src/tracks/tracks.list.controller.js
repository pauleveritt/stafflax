class Controller {
    static $inject = ['$log'];

    constructor($log) {
        this.$log = $log;
        $log.debug('tracks');
    }
}

export default Controller;
