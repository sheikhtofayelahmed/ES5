function leapYear(year) {
    if ((year%4==0) && (year%100!=0) || (year%400==0) ) {
        console.log(`this is a leap year`)
    } else {
        console.log(`this is not a leap year`)
    }
}
leapYear(1900);