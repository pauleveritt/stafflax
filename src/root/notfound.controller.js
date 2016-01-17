class Controller {
    static $inject = ['$log', '$location'];
    constructor($log, $location) {
        this.$log = $log;
        this.path = $location.path();
    }
}

export default Controller;
