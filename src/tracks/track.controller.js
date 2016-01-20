class Controller {
    static $inject = ['$log', 'Db', '$stateParams'];

    constructor ($log, Db, $stateParams) {
        this.$log = $log;
        this.Db = Db;
        let name = $stateParams.name;
        this.track = Db.tracks()[name];
    }

    listSkills () {
        return this.track.skills;
    }

}

export default Controller;
