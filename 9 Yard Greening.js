function yardGreening(input){
    let area = input[0];
    let costWhole = area * 7.61;
    let costWithDiscount = (costWhole / 100) * 18;

    console.log(`The final price is: ${costWhole - costWithDiscount} lv.`);
    console.log("The discount is: " + costWithDiscount + " lv.");
}

yardGreening(["550"]);