class Skills {
    static $inject = ['$log', '$q', 'FBURL', '$firebaseArray'];

    constructor($log, $q, FBURL, $firebaseArray) {
        this.$log = $log;
        this.$q = $q;
        this.$firebaseArray = $firebaseArray;
        this.ref = new Firebase(FBURL + 'skills');
        let query = this.ref.orderByChild('title');
        this.items = $firebaseArray(query);
    }

    list() {
        return this.items;
    }

    add(newSkill) {
        newSkill.name = newSkill.title.toLowerCase().replace(/\s/g, '-');
        this.items.$add(newSkill);
    }

    getBy(key, value) {
        let deferred = this.$q.defer();
        this.$firebaseArray(this.ref.orderByChild(key).equalTo(value))
            .$loaded(function (items) {
                deferred.resolve(items[0]);
            });
        return deferred.promise;
    }

    remove(skill) {
        this.items.$remove(skill);
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

export default Skills;
