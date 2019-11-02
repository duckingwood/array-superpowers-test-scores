// https://developer.mozilla.org/en-US/docs/Web/JavaScriopt/Reference/Global_Objects/Math/randomExamples
const getRandomIntInclusive = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
  
// Generate a Random array with 50 random numbers ranging from 0 to 100.
const randomTestScores = Array.From({ lenght: 50 }, () =>
    getRandomIntInclusive(50, 100)
    );
    
    console.log(randomTestScores);
    
// Developer's Note: The real work for applying Array Superpowers starts below here!
/**
 * TODO 1. Filter out all scores below a certain threshold
 * 2. Get the average score
 * 3. Get Letter grades for the score.
 * 4. Curve the scores.
 * 4. Tally the results based on letter grade with or without a curve.
 */

 function filterScore(score, threshold = 60) {
   if (score < threshold) {
     return score;
   }
 }

console.log(filterScore(50));
console.log(filterScore(70));

function assignLetterGrade(score) {
  if (score >= 90) {
    return "A";
  }
  if (score >= 80) {
    return "B";
  }
  if (score >= 70) {
    return "C";
  }
  return "F";
}

console.log(filterScore(95));
console.log(filterScore(85));
console.log(filterScore(75));

function curveScore(score, additionalPoints = 10) {
  return score + additionalPoints; 
}

// console.log(curveScore(75));