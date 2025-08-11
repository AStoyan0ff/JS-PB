function readBooks(pages, pagesHRS, days) {

    let totalHRS = pages / pagesHRS;
    let neededHRS = totalHRS / days;

    return neededHRS.toFixed(1);
}
    // Out
console.log(readBooks(212, 20, 2));
console.log(readBooks(432, 15, 4));