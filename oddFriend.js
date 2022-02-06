let friendsName=['tamman','Afjaal','Sanu','Wahid','Nabil','Marjan'];
function oddFriend(arr) {
    
    var oddFriendName=friendsName[''];
    for (let i = 0; i < arr.length; i++) {
        let name=arr[i]
        if ( typeof name !=='string') {
            return 'Please type a valid friends name. (friends name can not be in symbol or number)'
        }
        else if (name.length%2 !== 0) {
            oddFriendName=name;
            break;
        }
        
    }
    return oddFriendName;
    
}

oddFriend(friendsName);