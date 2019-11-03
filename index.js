// https://developer.mozilla.org/en-US/docs/Web/JavaScriopt/Reference/Global_Objects/Math/randomExamples
const getRandomIntInclusive = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
  
// Generate a Random array with 50 random numbers ranging from 0 to 100.
const randomTestScores = Array.From({ length: 500 }, () =>
    getRandomIntInclusive(50, 100)
    );
    
    console.log(randomTestScores);
    
// Developer's Note: The real work for applying Array Superpowers starts below here!
/**
 * //TODO// 
 * 1. Filter out all scores below a certain threshold
 * 2. Get the average score
 * 3. Get Letter grades for the score.
 * 4. Curve the scores.
 * 5. Tally the results based on letter grade with or without a curve.
 */

function filterScore(score, threshold = 60) {
   if (score < threshold) {
     return score;
   }
}

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

function curveScore(score, additionalPoints = 10) {
  return score + additionalPoints; 
}

// transformer will be a callback function.
function transformScores(scores, transformer) {
console.log(`Transformer function is: ${transformer.toString()}`);

  // return scores.map(function(score) {
  //  return transformer(score);
  // }); (long hand of line 52)

  return scores.map(score => transformer(score));
}

/**
 * Use reduce to sum up the numbers in an Array and divide by the length of the array.
 * @param{Array} scores
 * @return Results after 'summing up' all of the scores and dividing the length.
 */
function getAvg(scores) {
  return scores.reduce((total, score) => (total += score)) / score.length;
}

function tallyLetterGrades(scores) {
  return transformScores(scores, assignLetterGrade).reduce(
    (tally, letterGrade) => {
      if (letterGrade in tally) {
        // add 1 to the current value associated with this 'letterGrade in 'tally.;
        tally[letterGrade] += 1;
      } else {
        tally[letterGrade] = 1;
      }
      return tally;
    }, 
    {}
  );
}

const results = tallyLetterGrades(randomTestScores);

console.log(results);