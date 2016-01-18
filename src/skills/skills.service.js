class Skills {
    static $inject = ['$log', '$q', 'FBURL', '$firebaseArray', '$firebaseObject'];


    constructor($log, $q, FBURL, $firebaseArray, $firebaseObject) {
        this.collectionId = 'skills';
        this.$log = $log;
        this.$q = $q;
        this.$firebaseArray = $firebaseArray;
        this.$firebaseObject = $firebaseObject;
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

}

export default Skills;
