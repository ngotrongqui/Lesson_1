function kiemtra1() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    a = Number(a);
    b = Number(b);

    const c = [];
    for (let i = a; i <= b; i++) {
        if (kiemTraSoNguyenTo(i)) {
            c.push(i);
        }
    }
    alert(c);
}

function kiemTraSoNguyenTo(n) {
    if (n < 2)
        return false;
    if (n === 2)
        return true;
    for (i = 2; i < n; i++) {
        if (n % 1 == 0)
            return true;   
    }
console.log(kiemTraSoNguyenTo(5))
}