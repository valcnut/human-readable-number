module.exports = function toReadable (number) {
    let oneToTen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']; 
    let tenToTwenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    if (number === 0) {
        return 'zero';

    } else if (number > 0 && number < 10) {
        return oneToTen[number];

    } else if (number >= 10 && number < 20) {
        return tenToTwenty[number - 10];

    } else if (number >= 20 && number < 100) {
        return `${dozens[Math.trunc(number / 10)]} ${oneToTen[number % 10]}`.trim();

    } else if (number === 100) {
        return 'one hundred';

    } else if (number > 100 && number % 100 < 10) {
        return `${oneToTen[Math.trunc(number / 100)]} hundred ${oneToTen[number % 100]}`.trim(); 

    } else if (number > 100 && number % 100 < 20 && number % 100 >= 10) {
        return `${oneToTen[Math.trunc(number / 100)]} hundred ${tenToTwenty[number % 10]}`.trim();

    } else if (number > 100 && number % 100 >= 20) {
        return `${oneToTen[Math.trunc(number / 100)]} hundred ${dozens[String(number).charAt(1)]} ${oneToTen[number % 10]}`.trim();
    }
}

/*
- parseInt отсекает дроби и возвращает целое число;
- trim() отрезает пробелы;
- charAt() возвращает указанный символ из строки;
*/
