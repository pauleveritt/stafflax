class Controller {
    static $inject = ['$log', 'Skills', '$stateParams', '$state'];

    constructor($log, Skills, $stateParams, $state) {
        this.$log = $log;
        this.Skills = Skills;
        this.$state = $state;
        let name = $stateParams.name;
        Skills.getBy('name', name)
            .then((skill) => this.skill = skill);

    }

    update() {
        this.skill.$save()
            .then(() => this.$state.go('skills.view', {name: this.skill.name}));
    }
}

export default Controller;