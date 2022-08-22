var laptop = {
    name: "Lenovo Thinkpad",
    generation: "3rd",
    core: "i5",
    year: 2015,
    battery: "li-ion",
    accessories: ['charger','bagpack','sheild'],
    features: function(waterproof,cover,megacharger){
       var allfeatures = "50k";
        var midfeatures = "20k";    
        if(waterproof === 'Yes' || megacharger === 'Yes'){
                
                    console.log("price of laptop is " + allfeatures);
            }
            else if (cover === 'No' && megacharger === 'Yes'){
                console.log("price of laptop is " + midfeatures);
            }
    }

}
laptop.features('Yes','No','Yes');
laptop.memory = '16GB' // here is how to add new property in an object
console.log(laptop);
// console.log(laptop);
// console.log(laptop.name);
// console.log(laptop.year)
// console.log(laptop.features);






// var pcSpec =  {
//     name: "Lenovo Thinkpad",
//     intel: "Core i5 3rd",
//     battery: "li-ion",
//     rom: "160 GB SSD",
//     ram: "4GB",
//     model: 2014,
//     accessories: ["charger",'bagpack','sheild']
// }
// console.log(pcSpec);



// var gymMemberShip = {
//     name: "Osama's Gym",
//     fee: 2000,
//     discount: function(numberOfMembers){
//         var discountRate;
//         if(numberOfMembers >= 2){
//             discountRate = 10;
//         }
//         else{
//             discountRate = 0;
//         }
//         var totalFee = this.fee - (this.fee * discountRate / 100);
//         console.log(totalFee);
// }
// }
// gymMemberShip.discount(3);







// var appartmentBooking = {
//     name: 'flaknaz green',
//     price: 8500000,
//     westOpenCharges: 300000,
//     corner: 250000,
//     roadFacing: 350000,
//     totalBookingAmount: function (isWestOpen, isCorner, isRoadFacing) {
//         var totalPrice = this.price;
//         if (isWestOpen) {
//             totalPrice = totalPrice + this.westOpenCharges;
//         }
//         if (isCorner) {
//             totalPrice = totalPrice + this.corner;
//         }
//         if (isRoadFacing) {
//             totalPrice = totalPrice + this.roadFacing
//         }
//         console.log(totalPrice);
//     }
// }

// appartmentBooking.totalBookingAmount(true, true, false);










// temporary
// var allPlans = [];
// var plan1 = {
//     transfer: 1000,
//     price: 3.99,
//     space: 100,
//     pages: 10,
//     name: "basic",
//     isCancelable: true,
//     features: ["SEO", "SSL"],
//     serverInfo: {
//         processor: 5.3,
//         memory: 1
//     }
// };
// console.log(plan1.features);
// console.log(plan1.serverInfo.memory);
// plan1.name = "premium";
// console.log(plan1.name);
// delete plan1.features;
// console.log(plan1.features);
;
// console.log(allPlans.push(plan1));
// console.log(allPlans);













// var bike = {
//     name: "Babe Harley",
//     color: "grey",
//     price: 500000,
//     features: ["digital meter","Petrol Sensor","Break Sensor"],
//     model: 2022
// }
// console.log(bike);
// console.log(bike.price);
// delete bike.features;
// console.log(bike);


// var bikeArr = [];
// totalprice = 0;
// var bike = {
//     name: "Babe Harley",
//     color: "grey",
//     price: 500000,
//     features: ["digital meter","Petrol Sensor","Break Sensor"],
//     model: 2022
// }
// bikeArr.push(bike);
// console.log(bikeArr);
// console.log(bikeArr[0].name);






// the task: take input from user donor name donation and dn number and store it in local storage
var donorName = document.querySelector("#donor-name");
var dnNumber = document.querySelector("#dn-number");
var amount = document.querySelector("#donation-amount");
var totalamount = 0;
var alldonations = [];

function donate(){
        totalamount = totalamount + Number(amount.value);
        // console.log(donorName.value, dnNumber.value, amount.value);
    var donor = {
            DonorName: donorName.value,
            DnNumber: dnNumber.value,
            DnAmount: amount.value
        }
        alldonations.push(donor)
        donorName.value= "";
        dnNumber.value= "";
        amount.value= "";
        console.log(alldonations, totalamount);
      
            localStorage.setItem("Donor Name",donor.DonorName);
            localStorage.setItem("Donor Dn Number",donor.DnNumber);
            localStorage.setItem("Amount",donor.DnAmount);
            localStorage.setItem("total Amount",totalamount);
        // saveInLocalStorage();
        }
        // function saveInLocalStorage(){
        //     localStorage.setItem("Name of donor",donorName.value);
        //     localStorage.setItem("DNumber of donor",dnNumber.value);
        //     localStorage.setItem("Donated Amount",amount.value);
        // }
        
        
        
        
        
        
        // function donate(){
        // localStorage.setItem("Name of donor",donorName.value);
        // localStorage.setItem("DNumber of donor",dnNumber.value);
        // localStorage.setItem("Donated Amount",amount.value);
        // }
        // construct object method
        
        



// function DonationSys(name,dnNum,dAmount){
//     this.name = name;
//     this.DonorNumber = dnNum;
//     this.DonorAmount = dAmount;
// }

// var donor1 = new DonationSys("osama",786,1000);
// var donor2 = new DonationSys("sameer",896,4000);
// var donor3 = new DonationSys("hassan",900,6000);


// console.log(donor1,donor2,donor3);