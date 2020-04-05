var shedA={
  cows:34,
  milk:15
};
var shedB={
  cows:11,
  milk:28
};
var shedC={
  cows:27,
  milk:18
};
var shedD={
  cows:52,
  milk:11
};
var months={
  jan:31,
  feb:29,
  march:31,
  april:30,
  may:31,
  june:30,
  july:31,
  aug:31,
  sep:30,
  oct:31,
  nov:30,
  dec:31
}
var sheds=[shedA,shedB,shedC];
var mathA=shedA.cows*shedA.milk;
  var mathB=shedB.cows*shedB.milk;
  var mathC=shedC.cows*shedC.milk;
  var mathD=shedD.cows*shedD.milk;
  var mathTotal=mathA+mathB+mathC+mathD;
  

function shedAproduction(){
  console.log("Your production in Shed A " + mathA + " litres per day");
}
function shedBproduction(){
  console.log("Your production in Shed B " + mathB + " litres per day");
}
function shedCproduction(){
  console.log("Your production in Shed C " + mathC + " litres per day");
}
function shedDproduction(){
  console.log("Your production in Shed D " + mathD + " litres per day");
}
function totalProduction(){
  
  console.log("Your production in Shed A " + mathA + " litres per day");
  console.log("Your production in Shed B " + mathB + " litres per day");
  console.log("Your production in Shed C " + mathC + " litres per day");
  console.log("Your production in Shed D " + mathD + " litres per day");
  console.log("The total production is " + mathTotal+ " litres per day");
  
}

function incomeOverTime(selling_price){
  weeklyIncome=mathTotal*45*7;
  monthlyIncome=mathTotal*45*366;
  month=selling_price*mathTotal;
  console.log("Your Weekly income will be Ksh" + weeklyIncome);
  console.log("Your yearly income will be Ksh" + monthlyIncome);
  
  console.log("Your income for january will be Ksh" + months.jan*month);
  console.log("Your income for february will be Ksh" + months.feb*month);
  console.log("Your income for march will be Ksh" + months.march*month);
  console.log("Your income for april will be Ksh" + months.april*month);
  console.log("Your income for may will be Ksh" + months.may*month);
  console.log("Your income for june will be Ksh" + months.june* month);
  console.log("Your income for july will be Ksh" + months.july*month );
  console.log("Your income for august will be Ksh" + months.aug*month);
  console.log("Your income for september will be Ksh" + months.sep*month);
  console.log("Your income for october will be Ksh" + months.oct*month );
  console.log("Your income for november will be Ksh" + months.nov*month);
  console.log("Your income for december will be Ksh" + months.dec*month );
  
}

totalProduction();
incomeOverTime(45);
incomeOverTime(49.6);
// function buttonA(){
//   shedAproduction();
// }
// function buttonB(){
//   shedBproduction();
// }
// function buttonC(){
//   shedCproduction();
// }
// function buttonD(){
//   shedDproduction();
// }
// function buttontotal(){
//   shedAproduction();
// }