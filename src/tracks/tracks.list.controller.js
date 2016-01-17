class Controller {
    static $inject = ['$log'];

    constructor($log) {
        this.$log = $log;
        this.tracks = [
            {title: 'First'},
            {title: 'Second'},
            {title: 'Third'},
            {title: 'Fourth'}
        ]
    }
}

export default Controller;
