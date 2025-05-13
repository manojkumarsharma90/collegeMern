// console.log("5"+2+2);
// console.log(2+2+"5");
// console.log("5"!=5);
// console.log("5"==5);
// let a=5;
// let b=10;
// let c=a+b;
// console.log(`The sum of ${a} and ${b} = ${c}`);
function tableprint() {
    let a = parseInt(document.getElementById("button1").value); 
    let i;
    for ( i = 1; i <= 10; i++) {
        document.getElementById("para").innerHTML+=`${i*a }  ` ;
}
}
