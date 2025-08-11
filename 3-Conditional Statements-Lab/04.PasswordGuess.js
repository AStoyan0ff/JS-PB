function checkPassword(password) {

    const secretPass = "s3cr3t!P@ssw0rd";

    return password === secretPass
        ? "Welcome"
        : "Wrong password!";
}
console.log(checkPassword("qwerty"));           // "Wrong password!"
console.log(checkPassword("s3cr3t!P@ssw0rd"));  // "Welcome"
console.log(checkPassword("s3cr3t!p@ss"));      // "Wrong password!"


