class Controller {
    static $inject = ['$log', 'Skills'];

    constructor($log, Skills) {
        this.$log = $log;
        this.Skills = Skills;
        this.items = Skills.list();
        this.newSkill = '';
    }

    addSkill() {
        let newSkill = {
            title: this.newSkill.trim()
        };
        this.Skills.add(newSkill);
    }

    remove(skill) {
        this.Skills.remove(skill);
    }


}

export default Controller;
