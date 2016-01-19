class Controller {
    static $inject = ['$log', 'Skills', 'Tracks', '$stateParams', '$firebaseObject'];

    constructor($log, Skills, Tracks, $stateParams, $firebaseObject) {
        this.$log = $log;
        this.Skills = Skills;
        let name = $stateParams.name;
        Skills.getBy('name', name)
            .then((skill) => {
                this.skill = skill;
                $firebaseObject(Tracks.ref.child(skill.trackId))
                    .$loaded((track) => this.trackTitle = track.title);
            });
    }

}

export default Controller;
