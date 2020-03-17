module.exports = function countCats(matrix) {
  if (matrix == undefined || matrix == '') {
    return 0;
}
  let result = 0;
for(let i = matrix.length - 2; i > -1; i--) {
  matrix[i] = matrix[i].concat(matrix[i+1]);
}
matrix[0].map((a)=> a== '^^' ? result +=1 : result += 0);
return result; 
};