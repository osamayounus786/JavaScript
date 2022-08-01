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







var appartmentBooking = {
    name: 'flaknaz green',
    price: 8500000,
    westOpenCharges: 300000,
    corner: 250000,
    roadFacing: 350000,
    totalBookingAmount: function (isWestOpen, isCorner, isRoadFacing) {
        var totalPrice = this.price;
        if (isWestOpen) {
            totalPrice = totalPrice + this.westOpenCharges;
        }
        if (isCorner) {
            totalPrice = totalPrice + this.corner;
        }
        if (isRoadFacing) {
            totalPrice = totalPrice + this.roadFacing
        }
        console.log(totalPrice);
    }
}

appartmentBooking.totalBookingAmount(true, true, false);