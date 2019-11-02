// https://developer.mozilla.org/en-US/docs/Web/JavaScriopt/Reference/Global_Objects/Math/randomExamples
const getRandomIntInclusive = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
  
  // Generate a Random array with 50 random numbers ranging from 0 to 100.
  const randomTestScores = Array.From({ lenght: 50 }, () =>
    getRandomIntInclusive(50, 100)
    );
    
    console.log(randomTestScores);
    
    // Developer's Note: The real work for applying Array Superpowers starts below here!
    
