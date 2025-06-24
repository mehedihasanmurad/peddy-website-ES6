
let count = 4;
const interval = setInterval(() => {
    count--;
    if (count > 0) {
        // console.log(count)
    }
    else {
        clearInterval(interval);
    }
}, 1000);