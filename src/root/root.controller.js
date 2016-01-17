class Controller {
    static $inject = ['$log'];
    constructor($log) {
        this.$log = $log;
        this.rootMenu = [
            {label: 'Stafflax', state: 'home'},
            {label: 'Tracks', state: 'tracks.list'}
        ]
    }
}

export default Controller;
