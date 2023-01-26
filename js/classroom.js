/* classroom.js */
/** @param {number[]} grades */
export const getNumberOfGrades = grades => {
	// TODO: return the number of grades
    return grades.length;
  }
  
  /** @param {number[]} grades */
  export const getSumGrades = grades => {
	 // TODO: return the sum of all the grades
    let result = 0;
    grades.forEach(elem => {
      result += elem
    });
    return result;
  }
  
  /** @param {number[]} grades */
  export const getAverageValue = grades => {
	 // TODO: return the average value of all grades (sum of all grades divided by the total number of grades)
    let sum = getSumGrades(grades);
    return sum / grades.length;
  }
  
  /** @param {number[]} grades */
  export const getPassingGrades = grades => {
	 // TODO: return all passing grades (10 and above)
    let goodNumbers = [];
    grades.forEach(elem => {
      if (elem >= 10)
        goodNumbers.push(elem);
    })
    return goodNumbers;
  }
  
  /** @param {number[]} grades */
  export const getFailingGrades = grades => {
	 // TODO: return all failing grades (9 and below)
   let badNumbers = [];
   grades.forEach(elem => {
     if (elem <= 9)
       badNumbers.push(elem);
   })
   return badNumbers;
  }
  
  /** @param {number[]} grades */
  export const getRaisedGrades = grades => {
	 // TODO: return all the grades raised by 1 (grades should not exceed 20)
      let coolNumbers = [];
      grades.forEach(elem => {
        if (elem <= 19) {
          elem++;
          coolNumbers.push(elem)
        }
      })
      return coolNumbers;
  }