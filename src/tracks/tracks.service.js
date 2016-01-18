class Tracks {
    static $inject = ['$log', '$q', 'FBURL', '$firebaseArray'];

    constructor($log, $q, FBURL, $firebaseArray) {
        this.$log = $log;
        this.$q = $q;
        this.$firebaseArray = $firebaseArray;
        this.ref = new Firebase(FBURL + 'tracks');
        let query = this.ref.orderByChild('title');
        this.items = $firebaseArray(query);
    }

    list() {
        return this.items;
    }

    add(newTrack) {
        newTrack.name = newTrack.title.toLowerCase().replace(/\s/g, '-');
        return this.items.$add(newTrack);
    }

    getBy(key, value) {
        let deferred = this.$q.defer();
        this.$firebaseArray(this.ref.orderByChild(key).equalTo(value))
            .$loaded(function (items) {
                deferred.resolve(items[0]);
            });
        return deferred.promise;
    }

    remove(track) {
        this.items.$remove(track);
    }

    skills() {
        let deferred = this.$q.defer();
        this.$firebaseArray(this.ref.orderByChild(key).equalTo(value))
            .$loaded(function (items) {
                deferred.resolve(items[0]);
            });
        return deferred.promise;
    }

}

export default Tracks;
