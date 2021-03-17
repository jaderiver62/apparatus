var moment = require('moment');
module.exports = {
    date_format: date => {
        return ` ${moment(date).format("llll").toString()}`;

    },
    word_format: (word, amount) => {
        if (amount !== 1) {
            return `${word}s`;
        }

        return word;
    }
}