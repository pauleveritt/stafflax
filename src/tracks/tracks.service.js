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
        newTodo.name = newTodo.title.toLowerCase().replace(/\s/g, '-');
        this.items.$add(newTodo);
    }

    getName (name) {
        return this.items.find(track => track.name === name);
    }
}

export default Tracks;
