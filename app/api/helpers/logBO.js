'use strict';

class LogBO {
    constructor() { }

    async register(error) {
        // TODO log 
        if (error.error !== undefined) {
            console.error(`API Logcat ${error.error}`);
        } else {
            console.error(`API Logcat ${error}`);
        }
    }
}

module.exports = LogBO;