class Controller {
    static $inject = ['$log', 'Tracks'];

    constructor($log, Tracks) {
        this.$log = $log;
        this.Tracks = Tracks;
        this.items = Tracks.list();
        this.newTodo = '';
    }

    addToDo() {
        this.Tracks.add(this.newTodo.trim());
    }
}

export default Controller;
