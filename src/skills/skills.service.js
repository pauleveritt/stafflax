class Skills {
    static $inject = ['$log', '$q', 'FBURL', '$firebaseArray', '$firebaseObject', 'Tracks'];


    constructor($log, $q, FBURL, $firebaseArray, $firebaseObject, Tracks) {
        this.collectionId = 'skills';
        this.$log = $log;
        this.$q = $q;
        this.$firebaseArray = $firebaseArray;
        this.$firebaseObject = $firebaseObject;
        this.Tracks = Tracks;
        this.refUrl = FBURL + this.collectionId + '/';
        this.ref = new Firebase(this.refUrl);
        let query = this.ref.orderByChild('title');
        this.items = $firebaseArray(query);
    }

    list() {
        return this.items;
    }

    add(item) {
        item.name = item.title.toLowerCase().replace(/\s/g, '-');
        return this.items.$add(item);
    }

    getBy(key, value) {
        let deferred = this.$q.defer();
        this.ref.orderByChild(key).equalTo(value).once('child_added', (v) => {
            let itemUrl = this.refUrl + v.key();
            let ref = new Firebase(itemUrl);
            deferred.resolve(this.$firebaseObject(ref));
        });
        return deferred.promise;
    }

    remove(item) {
        this.items.$remove(item);
    }

    getTrack(trackId) {
        // Return a promise with the track information for this skill
        let deferred = this.$q.defer();

        this.$firebaseObject(this.Tracks.ref.child(trackId))
            .$loaded((track) => deferred.resolve(track));

        return deferred.promise;
    }

}

export default Skills;
