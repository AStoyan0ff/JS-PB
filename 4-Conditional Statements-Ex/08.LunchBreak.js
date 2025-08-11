function bFast(name, episode, breaks) {

    let lunch = breaks / 8;
    let rest = breaks / 4;

    let freeT = breaks - lunch - rest;

    if (freeT >= episode) {
        let rem = Math.ceil(freeT - episode);

        console.log(
            `You have enough time to watch ${name} and left with ${rem} minutes free time.`);
    }
    else {
        let need = Math.ceil(episode - freeT);

        console.log(
            `You don't have enough time to watch ${name}, you need ${need} more minutes.`);
    }
}
bFast("Game of Thrones", 60, 96);
bFast("Teen Wolf", 48, 60);