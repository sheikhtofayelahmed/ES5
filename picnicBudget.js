function picnicBudget(person) {
    if ( typeof person !=='number' || Number.isInteger(person) !==true ) {
        return 'Please type a valid person number. (person number can not be in letter,symbol or fraction-1.5,0.6 etc)'
        
    }

    let firstHundredPersonCost;
    let secondHundredPersonCost;
    let moreThanSecondHundredPersonCost;
    if (person<=100) {
        firstHundredPersonCost=person*5000;
        secondHundredPersonCost=0;
        moreThanSecondHundredPersonCost=0;

    } 
    else if(person>100 && person<=200){
        firstHundredPersonCost=100*5000;
        secondHundredPersonCost=(person-100)*4000;
        moreThanSecondHundredPersonCost=0;
    }
    else if(person>200){
        firstHundredPersonCost=100*5000;
        secondHundredPersonCost=100*4000;
        moreThanSecondHundredPersonCost=(person-200)*3000;
    }
    let totalCost=firstHundredPersonCost+secondHundredPersonCost+moreThanSecondHundredPersonCost;
    return totalCost;

}
picnicBudget();
