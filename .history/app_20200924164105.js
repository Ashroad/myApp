var angle, angle3, x;
angle = 180;
angle3 = angle * 90;
angle3 > 1901 ? console.log(angle3) : console.log(angle);
angle = angle3 * 4;
x = setInterval(() => {
    if (angle3 - 100 < 10900) {
        setTimeout(x);
    } else {
        console.log(angle3);
        angle3 = angle3 - (angle / 100);
    }


}, 1000);


