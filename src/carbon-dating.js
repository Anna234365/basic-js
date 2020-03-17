const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let result = Math.ceil(Math.abs(Math.log(parseFloat(sampleActivity)/MODERN_ACTIVITY)/(0.693/HALF_LIFE_PERIOD)));
  return (parseFloat(sampleActivity) < 15 && parseFloat(sampleActivity) > 0 && typeof sampleActivity == 'string') ? result : false;
};
