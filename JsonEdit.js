const fs = require('fs');
class JsonEdit {
    /**
     * @param {string} path
     */
    static Get(path) {
        let obj = {};
        try {
            obj = JSON.parse(fs.readFileSync(`./${path}`));
        }
        catch(err) {
            console.error(err);
        }
        return obj;
    }
    /**
     * @param {string} path
     * @param {object} obj
     */
    static Set(path, obj) {
        try {
            fs.writeFileSync(`./${path}`, JSON.stringify(obj, null, 4));
            return true;
        }
        catch(err) {
            return false;
        }
    }
}
module.exports = JsonEdit;