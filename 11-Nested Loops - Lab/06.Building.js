function build(floors, rooms) {

    for (let f = floors; f >= 1; f--) {
        let line = "";

        for (let r = 0; r < rooms; r++) {

            if (f === floors) {
                line += `L${f}${r} `;
            }
            else if (f % 2 === 0) {
                line += `O${f}${r} `;
            }
            else {
                line += `A${f}${r} `;
            }
        }
        console.log(line.trim());
    }
}
build(6, 4);
build(9, 5);
build(4, 4);