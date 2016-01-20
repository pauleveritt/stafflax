class Controller {
    static $inject = ['$log', 'Skills', 'Db'];

    constructor($log, Skills, Db) {
        this.$log = $log;
        this.Skills = Skills;
        this.items = Skills.list();
        this.newSkill = '';
    }

    remove(skill) {
        this.Skills.remove(skill);
    }


}

export default Controller;
