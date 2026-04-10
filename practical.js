
function check() {
    var n = document.getElementById("num").value;
    var i;

    for(i = 2; i < n; i++) {
        if(n % i == 0) {
            document.getElementById("result").innerHTML = "Not Prime";
            return;
        }
    }

    document.getElementById("result").innerHTML = "Prime";
}