function moving(input) {

    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);

    let totalSpace = width * length * height;
    let cnt = 3;

    while (cnt < input.length) {
        let cmd = input[cnt++];

        if (cmd === "Done") {

            console.log(`${totalSpace} Cubic meters left.`);
            return;
        }

        let boxes = Number(cmd);
        totalSpace -= boxes;

        if (totalSpace < 0) {
            
            console.log(`No more free space! You need ${Math.abs(totalSpace)} Cubic meters more.`);
            return;
        }
    }
}

moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
// ➜ No more free space! You need 2 Cubic meters more.

moving(["10", "1", "2", "4", "6", "Done"]);
// ➜ 10 Cubic meters left.

