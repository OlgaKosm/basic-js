

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {

    if (members === null || members === undefined) {
        return false;
    }

    if (typeof members === 'object') {
      if (Object.keys(members).length === 1) {
        return false;
      }
    }
    if (typeof members !== 'string' && typeof members !== 'object') {
      return false;
    }


  if (members.length === 0 ) {
    return false;
  }

  let newArr = [];
  members.forEach(el => {
    if (typeof el === 'string') {
      let newel = el.trim();
      newArr.push(newel[0]);
    }
  });

  return newArr.sort((a, b) => a.localeCompare(b)).join('').toUpperCase();

}



module.exports = {
  createDreamTeam
};
