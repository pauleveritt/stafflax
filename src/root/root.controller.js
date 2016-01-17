class Controller {
    static $inject = ['$log'];
    constructor($log) {
        this.$log = $log;
        this.rootMenu = [
            {label: 'Stafflax', route: 'home'},
            {label: 'Tracks', route: 'home'}
        ]
    }
}

export default Controller;
