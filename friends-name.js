
let friendsName=['afjal','tamm','nabila','wahid','shanu','mamun']
function bestFriend(arr) {
    var name=friendsName[0];
    for (let i = 0; i < arr.length; i++) {
        const element=arr[i]
        if (name.length<element.length) {
            name=element;
        }
        
    }return name
    
}
console.log(bestFriend(friendsName))