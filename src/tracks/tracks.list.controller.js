class Controller {
    static $inject = ['$log', 'Tracks'];

    constructor($log, Tracks) {
        this.$log = $log;
        this.Tracks = Tracks;
        this.items = Tracks.list();
        this.newTodo = '';
    }

    addToDo() {
        let newTodo = {
            title: this.newTodo.trim()
        };
        this.Tracks.add(newTodo);
    }
}

export default Controller;
