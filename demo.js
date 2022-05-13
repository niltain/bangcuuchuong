let sout;
sout = "<table border='1' width='400' cellspacing='0' cellpadding='5'>"
for (i = 1; i <= 9; i++) {
    sout = sout +  "<tr>";
    for (j = 2; j <= 9; j++) {
        sout = sout + "<td>"+ j + "*" + i + "=" + i * j  + "</td>";
    }
    sout = sout + "</tr>";
}
sout = sout + "</table>";
document.write(sout);