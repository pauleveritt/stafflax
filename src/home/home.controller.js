class Controller {
    static $inject = ['$log', '$firebaseObject'];
    constructor($log, $firebaseObject) {
        this.$log = $log;
        var ref = new Firebase('https://burning-torch-5178.firebaseio.com/');
        this.items = $firebaseObject(ref);
        $log.debug('this.items', this.items);

        var randomRoomId = Math.round(Math.random() * 100000000);
        this.items[randomRoomId] = {id: randomRoomId, title: 'Foo'};
        this.items.$save();
    }
}

export default Controller;
