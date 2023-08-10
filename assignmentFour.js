// Problem One

function cubeNumber(number){
    let result;
    if(typeof number !== 'number'){
        return 'Please input a valid number'
    }else{
        // result = number * number * number

       
    }
    return result;
}

// Problem Two

 function matchFinder(string1, string2){
    if(typeof string1 !== 'string' || typeof string2 !== 'string'){
        // console.log(string1, string2)
        return 'Please make sure both arguments are string'
    }else{
        let stringArr = [];
        stringArr = string1.split(' ')
        // console.log(stringArr);

        // console.log(stringArr.indexOf(string2));

       if( stringArr.indexOf(string2) === -1 ){
        return false
       }else{
        return true
       }
    }
 }



// Problem Three

function sortMaker(arr){
    let newArr = []
    if(arr[0] < 0 || arr[1] < 0){
        return 'Please make sure both inputs are positive'
    }else if(arr[0] === arr[1]){
        return 'equal'
    }else if(arr[0] > arr[1]){
        return arr
    }else{
        let temp;
        temp = arr[0];
        newArr.push( arr[0] = arr[1]);
        newArr.push( arr[1] = temp);
    }
    return newArr
}

// Problem Four

function findAddress(obj){

    let keys = Object.keys(obj);

    let address = [ ];

    if(keys.indexOf('street') === -1){
        address.push('__')
    }else{
        address.push(obj.street)
    }

    if(keys.indexOf('house') === -1){
        address.push('__')
    }else{
        address.push(obj.house)
    }

    if(keys.indexOf('society') === -1){
        address.push('__')
    }else{
        address.push(obj.society)
    }

    let addressString = address.toString()
    return addressString;
}

// Problem Five

function canPay(changeArray, totalDue){

    if(changeArray.length === 0){
        return 'I dont have mone now'
    }
    let totalMoney =0;

    for(i = 0; i<= changeArray.length-1; i++){

        totalMoney += changeArray[i]
    }
    if(totalMoney >= totalDue ){
        return true
    }else{
        return false
    }
}
