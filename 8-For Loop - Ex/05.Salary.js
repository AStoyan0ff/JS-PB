function chekSalary(input) {

    let tabs = Number(input[0]);
    let salary = Number(input[1]);

    for (let pos = 2; pos < tabs + 2; pos++) {
        let site = input[pos];

        switch(site) {

            case "Facebook":
                salary -= 150;
                break;

            case "Instagram":
                salary -= 100;
                break;
                
            case "Reddit":
                salary -= 50;
                break;    
        }

        if (salary <= 0) {

            console.log("You have lost your salary.");
            return;
        }
    }

    console.log(Math.floor(salary));
}

// Test Out 
chekSalary([
    10,
    750,
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"]); // You have lost your salary.

chekSalary([
    3,
    500,
    "Github.com",
    "Stackoverflow.com",
    "softuni.bg"
]);               // 500

chekSalary([
    3,
    500,
    "Facebook",
    "Stackoverflow.com",
    "softuni.bg"
]);              // 350
