module.exports = {
    date_format: date => {
        return ` ${new Date(date).getHours()}:${new Date(date).getMinutes()}  ~  ${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
      date
    ).getFullYear()} `;

    },
    word_format: (word, amount) => {
        if (amount !== 1) {
            return `${word}s`;
        }

        return word;
    }
}