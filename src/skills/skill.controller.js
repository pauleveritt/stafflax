class Controller {
    static $inject = ['$log', 'Skills', '$stateParams'];

    constructor($log, Skills, $stateParams) {
        this.$log = $log;
        this.Skills = Skills;
        let name = $stateParams.name;
        Skills.getBy('name', name)
            .then((skill) => {
                this.skill = skill;
                Skills.getTrack(skill.trackId)
                    .then((track) => this.trackTitle = track.title);
            });
    }

}

export default Controller;
