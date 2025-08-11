function checkExam(examHour, examMinute, arrivalHour, arrivalMinute) {

    const examTime = examHour * 60 + examMinute;
    const arrivalTime = arrivalHour * 60 + arrivalMinute;
    const diff = arrivalTime - examTime;

    let status;

    if (diff > 0) {
        status = "Late";
    }
    else if (diff >= -30) {
        status = "On time";
    }
    else {
        status = "Early";
    }


    let timeDifference = "";

    if (diff !== 0) {
        const absDiff = Math.abs(diff);

        if (absDiff < 60) {
            timeDifference = `${absDiff} minutes ${diff > 0 ? 'after' : 'before'} the start`;
        }
        else {
            const hours = Math.floor(absDiff / 60);
            const minutes = absDiff % 60;

            const formattedMinutes = minutes.toString().padStart(2, '0');
            timeDifference = `${hours}:${formattedMinutes} hours ${diff > 0 ? 'after' : 'before'} the start`;
        }
    }

    let output = status;

    if (timeDifference) {
        output += ` ${timeDifference}`;
    }

    console.log(output);
}
checkExam(9, 30, 9, 50);
checkExam(9, 0, 8, 30);
checkExam(16, 0, 15, 0);
checkExam(9, 0, 10, 30);
checkExam(14, 0, 13, 55);
checkExam(11, 30, 8, 12);
checkExam(10, 0, 10, 0);
checkExam(11, 30, 10, 55);
checkExam(11, 30, 12, 29);
