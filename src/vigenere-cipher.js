class VigenereCipheringMachine {
    
    constructor (reverse) {
       
        this.reverse = reverse;
    }
    
    encrypt(message, key) {
        if(message == undefined || key == undefined) {
            throw new Error;
        }
        
        let arr1 = message.toUpperCase().replace(/[\s]/g, '').split('');
         let arr2 = key.toUpperCase().repeat(Math.ceil(arr1.length/key.length +1)).slice(0,arr1.length).split('');
         let arr3 = [];
         let arr4 = [];

         for(let i = 0; i < message.length; i++) {
            if(message.charAt(i) == ' ') {
                arr4.push(i);
            }
         }

         for (let i = 0; i < arr1.length; i++) {
            if(arr1[i].charCodeAt() > 64 && arr1[i].charCodeAt() < 91) {
                arr3[i] = String.fromCharCode(((arr1[i].charCodeAt() - 65 + arr2[i].charCodeAt() - 65) % 26)+65);   
            } else {
                arr3[i] = arr1[i];
            }
            
         }
        
         for(let i = 0; i < arr4.length; i++) {
            arr3.splice(arr4[i],0,' ');
         }

         return this.reverse == false ? arr3.reverse().join('').toUpperCase() : arr3.join('').toUpperCase();
    }

    decrypt(encryptedMessage, key) {
        if(encryptedMessage == undefined || key == undefined) {
            throw new Error;
        }
        
        let arr1 = encryptedMessage.replace(/[\s]/g, '').toUpperCase().split('');
         let arr2 = key.toUpperCase().repeat(Math.ceil(arr1.length/key.length +1)).slice(0,arr1.length).split('');
         let arr3 = [];
         let arr4 = [];

         for(let i = 0; i < encryptedMessage.length; i++) {
            if(encryptedMessage.charAt(i) == ' ') {
                arr4.push(i);
            }
         }
         
         for (let i = 0; i < arr1.length; i++) {
            if(arr1[i].charCodeAt() > 64 && arr1[i].charCodeAt() < 91) {
                arr3[i] = String.fromCharCode(((arr1[i].charCodeAt() - arr2[i].charCodeAt() + 26) % 26)+65);   
            } else {
                arr3[i] = arr1[i];
            }
            
         }
        
         for(let i = 0; i < arr4.length; i++) {
            arr3.splice(arr4[i],0,' ');
         }

         return this.reverse == false ? arr3.reverse().join('').toUpperCase() : arr3.join('').toUpperCase();
        
    }
}

module.exports = VigenereCipheringMachine;