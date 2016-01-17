class Tracks {
    static $inject = ['$log', 'FBURL', '$firebaseArray'];

    constructor($log, FBURL, $firebaseArray) {
        this.$log = $log;
        let ref = new Firebase(FBURL + 'todos');
        this.items = $firebaseArray(ref);
    }

    list() {
        return this.items;
    }

    add(newTodo) {
        this.$log.debug('ntd', newTodo);
        this.items.$add({
            title: newTodo,
            completed: false
        });
    }
}

export default Tracks;
