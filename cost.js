//problem 2: panda cost

function pandaCost(singara,somucha,jilapi) {
    if ( typeof singara !=='number' || typeof somucha !=='number' || typeof jilapi !=='number' || Number.isInteger(singara) !==true || Number.isInteger(somucha) !==true || Number.isInteger(jilapi) !==true) {
        return 'Please type a valid number of singara,somucha or jilapi . Ex:1,2,3 (singara,somucha,jilapi number can not be in letter,symbol or fraction-1.5,0.6 etc)'
    }
    let singaraCost=singara*7;
    let somuchaCost=somucha*10;
    let jilapiCost=jilapi*15;
    let totalCost=singaraCost+somuchaCost+jilapiCost;
    return totalCost;

}
pandaCost();
