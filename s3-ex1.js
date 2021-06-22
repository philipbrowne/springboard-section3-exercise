function countDown(num) {
    let time = num;
    let timer = setInterval(function () {
        if (time > 0) {
            console.log(time)
            time--;
        } else {
            console.log('DONE!')
            clearInterval(timer);
        } 
    }, 1000)
}



