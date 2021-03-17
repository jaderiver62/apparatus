const { date_format, word_format } = require('../utils/helpers');


test('date_format() returns a date string', () => {
    const date = new Date('2020-03-20 16:12:03');

    expect(date_format(date)).toBe('3/20/2020');
});
test('word_format() returns a pluralized word', () => {
    const word = word_format('paw', 1);
    const anotherWord = word_format('ear', 2);

    expect(word).toBe('paw');
    expect(anotherWord).toBe('ears');
});