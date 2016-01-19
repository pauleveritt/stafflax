class Controller {
    static $inject = ['$log', 'Skills', '$state'];

    constructor($log, Skills, $state) {
        this.$log = $log;
        this.Skills = Skills;
        this.$state = $state;
        this.tracks = [
            {id: 1, title: 'Defense'},
            {id: 2, title: 'Offense'}
        ];
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
