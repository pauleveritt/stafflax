class Controller {
    static $inject = ['$log', 'Skills', '$state'];

    constructor($log, Skills, $state) {
        this.$log = $log;
        this.Skills = Skills;
        this.$state = $state;
    }

    add(title) {
        let newItem = {
            title: title.trim()
        };
        this.Skills.add(newItem)
            .then(() => this.$state.go('skills.list'));
    }
}

export default Controller;
