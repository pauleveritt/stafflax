require('videogular-themes-default/videogular.css');

class Controller {
    static $inject = ['$log', 'Db', '$stateParams', '$sce'];

    constructor ($log, Db, $stateParams, $sce) {
        this.$log = $log;
        this.Db = Db;
        let trackName = $stateParams.trackName;
        this.track = Db.tracks()[trackName];
        let skillName = $stateParams.skillName;
        this.skill = this.track.skills
            .find((skill) => skill.name === skillName);

        this.config = {
            sources: [
                {
                    src: null,
                    type: 'video/mp4'
                }
            ],
            tracks: [
                {
                    src: 'http://www.videogular.com/assets/subs/pale-blue-dot.vtt',
                    kind: 'subtitles',
                    srclang: 'en',
                    label: 'English',
                    default: ''
                }
            ],
            plugins: {
                poster: 'http://www.videogular.com/assets/images/videogular.png'
            }
        };

        // Set the current video
        this.config.sources[0].src = $sce.trustAsResourceUrl(this.skill.videoUrl);
    }

    listPoints () {
        return this.skill.instructionPoints;
    }

}

export default Controller;
