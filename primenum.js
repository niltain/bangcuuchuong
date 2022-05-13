let n = 2
let count = +prompt("Bạn muốn hiển thị bao nhiêu số nguyên tố:")
for (let i = 0; i <= count;) {
    let check = false
    for (let j = 2; j < n; j++) {
        if (n % j === 0) {
            check = true
        }
    }
    if (!check) {
        document.write(n + "<br> ")
        i++
    }
    n++
}





