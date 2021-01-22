//  https://github.com/sydulrubel/assignment.js

kilometerToMeter;
function kilometerToMeter(km) {
    var meter = km * 1000;
    return meter;
}
var dictance = kilometerToMeter(12);
console.log(dictance);


budgetCalculator;
function budgetCalculator(watch, phone, laptop) {
    var watchprice = watch * 50;
    var phoneprice = phone * 100;
    var laptoporice = laptop * 500
    var totalprice = watchprice + phoneprice + laptoporice;
    return totalprice;

}
var totalNeed = budgetCalculator(20, 10, 2);
console.log(totalNeed);




hotelCost;
function hotelCost(days) {
    var total = 0;
    if (days <= 10) {
        total = days * 100;
    } else if (days <= 20) {
        var first = 10 * 100;
        var remain = days - 10;
        var second = remain * 80;
        total = first + second;
    } else {
        var first = 10 * 100;
        var second = 10 * 80;
        var remaining = days - 20;
        var third = remaining * 50;
        total = first + second + third;
    }
    return total;
}
var lagbe = hotelCost(32);
console.log(lagbe);



megaFriend
function megaFriend(frndList) {
    var mFriend = " ";
    for (var i = 0; i < frndList.length; i++) {
        var megaName = frndList[i];
        if (megaName.length > mFriend.length) {
            mFriend = megaName;
        }
    }
    return mFriend;
}

friends = ['Joynal', 'Pitu', 'Jahid', 'Mamun', 'Sanjoy', 'Aminur', 'Shohel', 'Amranul', 'Nazrul', 'Jagannath']
var niceGuy = megaFriend(friends);
console.log(niceGuy);