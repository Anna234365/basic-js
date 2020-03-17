module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let obj = {};
   
    obj.turns = Math.pow(2, disksNumber) - 1;
    obj.seconds = (Math.pow(2, disksNumber) - 1) / (turnsSpeed / 3600);
     
       return obj;
   }