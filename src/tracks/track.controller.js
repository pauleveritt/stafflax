require('videogular-themes-default/videogular.css');

class Controller {
    static $inject = ['$log', 'Db', '$stateParams', '$sce'];

    constructor ($log, Db, $stateParams, $sce) {
        this.$log = $log;
        this.Db = Db;
        let name = $stateParams.name;
        this.track = Db.tracks()[name];
        let origUrl = 'http://static.videogular.com/assets/videos/videogular.mp4';
        //let videoUrl2 = 'https://dl.dropboxusercontent.com/u/22343380/rest_client.mp4';
        let videoUrl3 = 'http://googledrive.com/host/0BxeWwIghVZlTcExsX3p3Y3dGQ0k';
        this.config = {
            sources: [
                {
                    src: $sce.trustAsResourceUrl(videoUrl3),
                    type: 'video/mp4'
                },
                {
                    src: $sce.trustAsResourceUrl('http://static.videogular.com/assets/videos/videogular.webm'),
                    type: 'video/webm'
                },
                {
                    src: $sce.trustAsResourceUrl('http://static.videogular.com/assets/videos/videogular.ogg'),
                    type: 'video/ogg'
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
            //theme: 'bower_components/videogular-themes-default/videogular.css',
            plugins: {
                poster: 'http://www.videogular.com/assets/images/videogular.png'
            }
        };

    }

    listSkills () {
        return this.track.skills;
    }

}

export default Controller;
