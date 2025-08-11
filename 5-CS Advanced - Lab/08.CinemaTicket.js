function ticket(input) {

    if (input === 'Monday' || input === 'Tuesday' || input === 'Friday') {
        console.log('12');
    }
    else if (input === 'Wednesday' || input === 'Thursday') {
        console.log('14');
    }
    else {
        console.log('16');
    }
}

ticket('Monday');
ticket('Friday');
ticket('Wednesday');
ticket('Thursday');
ticket('Sunday');
