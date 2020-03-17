module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error();
    };
    
    for(let i = 0; i<arr.length; i++) {
        (arr[i] === '--double-next' && i < arr.length - 1) ? arr[i] = arr[i+1] : false;
        (arr[i] === '--double-prev' && i > 0) ? arr[i] = arr[i-1] : false;
    }
    
    for(let i = arr.length-1; i>-1; i--) {
        (arr[i] === '--discard-next') ? arr[i+1] = '--discard-next' : false;
    }
    
    for(let i = arr.length-1; i>-1; i--) {
        (arr[i] === '--discard-next') ? arr.splice(i,1) : false;
    }
   
    for(let i = 0; i<arr.length; i++) {
        (arr[i] === '--discard-prev' && i > 0) ? arr[i-1] = '--discard-prev' : false;
    }
    
    for(let i = arr.length-1; i>-1; i--) {
        (arr[i] === '--discard-prev') ? arr.splice(i,1) : false;
    }
    
    arr[0] == '--discard-next' ||  arr[0] == '--discard-prev' ||  arr[0] == '--double-next' || arr[0] == '--double-prev' ? 
    arr.splice(0,1) : false;
    
    let end =arr.length-1
    arr[end] == '--discard-next' ||  arr[end] == '--discard-prev' || arr[end] == '--double-next' || arr[end] == '--double-prev' ? 
    arr.splice(arr.length-1,1) : false;
    
    return arr;
};