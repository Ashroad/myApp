var angle, angle3, x;
angle = 180;
angle3 = angle * 9;
angle3 > 1901 ? console.log(angle3) : console.log(angle);
angle = angle3 * 4;
x => setInterval(() => {

    console.log(angle3);
    angle3 = angle3 - angle;
    if (angle3 - 100) {
        setTimeout(x);

    }

}, 1000);