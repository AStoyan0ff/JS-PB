function delivery (pens, markers, cleaner, discount) {

    const penPrice = 5.80;
    const markerPrice = 7.20;
    const cleanerPrice = 1.20;

    const totalPens = pens * penPrice;
    const totalMarkers = markers * markerPrice;
    const totalCleaner = cleaner * cleanerPrice;

    const total = totalPens + totalMarkers + totalCleaner;

    const discounted = total * (discount / 100);
    const finalPrice = total - discounted;

    if (finalPrice % 1 === 0) {
        return finalPrice.toFixed(1);
    }
    else {

        const setPrecision = finalPrice.toString().split('.')[1];

        if (setPrecision && setPrecision.length === 3) {
            return finalPrice.toFixed(3);
        }
        else if (setPrecision && setPrecision.length === 1) {
            return finalPrice.toFixed(1);
        }
        else {
            return finalPrice.toFixed(2);
        }
    }
}
  // Out
console.log(delivery(2, 3, 4, 25));
console.log(delivery(4, 2, 5, 13));