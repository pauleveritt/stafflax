class Controller {
    static $inject = ['$log', 'Skills', 'Tracks', '$stateParams', '$state'];

    constructor($log, Skills, Tracks, $stateParams, $state) {
        this.$log = $log;
        this.Skills = Skills;
        this.Tracks = Tracks;
        this.$state = $state;
        this.tracks = Tracks.list();
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
