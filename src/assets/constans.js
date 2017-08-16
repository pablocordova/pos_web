function define(name, value) {
    Object.defineProperty(exports, name, {
        value: value,
        enumerable: true
    });
}

define('MONGO_PATH', 'mongodb://localhost/postdb');