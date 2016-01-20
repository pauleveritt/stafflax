class Controller {
    static $inject = ['$log', 'Skills', 'Db'];

    constructor($log, Skills, Db) {
        this.$log = $log;
        this.Skills = Skills;
        this.items = Skills.list();
        this.newSkill = '';
        $log.debug('skills json', Db.db.tracks.defense.skills[0].name);
    }

    remove(skill) {
        this.Skills.remove(skill);
    }


}

export default Controller;
