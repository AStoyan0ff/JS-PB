function ladyBugs(input) {

    const size = input[0];
    const area = Array(size).fill(0);
    const index = input[1].split(' ').map(Number);
  
    for (let idx of index) {

        if (idx >= 0 && idx < size) {
            area[idx] = 1;
        }
    }

    for (let i = 2; i < input.length; i++) {

        let [startStr, direction, flyStr] = input[i].split(' ');
        let startIdx = Number(startStr);
        let flySize = Number(flyStr);
        
        if (startIdx < 0 || startIdx >= size || area[startIdx] !== 1) {
            continue;
        }

        area[startIdx] = 0;
        
        flySize = direction === 'left' ? -flySize : flySize;
        let nextIdx = startIdx + flySize;

        while (nextIdx >= 0 && nextIdx < size) {

            if (area[nextIdx] === 0) {
                area[nextIdx] = 1;
                break;
            }
            nextIdx += flySize;
        }
    }
    console.log(area.join(' '));
}

ladyBugs([3, '0 1', '0 right 1', '2 right 1'])                     // 0 1 0
ladyBugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);     // 0 0 0
ladyBugs([5, '3', '3 left 2', '1 left -2']);                       // 0 0 0 1 0
