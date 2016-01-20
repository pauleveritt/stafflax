class Controller {
    static $inject = ['$log', 'Skills', 'Tracks', '$state'];

    constructor($log, Skills, Tracks, $state) {
        this.$log = $log;
        this.Skills = Skills;
        this.$state = $state;
        this.tracks = Tracks.list();
        this.trackId = null;
    }

    add(title) {
        let newItem = {
            title: title.trim(),
            trackId: this.trackId
        };
        this.Skills.add(newItem)
            .then(() => this.$state.go('skills.list'));
    }
}

export default Controller;
