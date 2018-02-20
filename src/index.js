/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
    if(preferences === null || !Array.isArray(preferences) || preferences.length < 3){
        return 0;
    }
    let prefDistinct = [0].concat(preferences); // make index of person equal it's number --> code more clear

    let triangleCount = 0;
    prefDistinct.forEach(function(lovedPerson, personNumber, array) {
        let lovedOfLovedPerson = array[lovedPerson];
        if(lovedOfLovedPerson === personNumber){
            return;
        }
        let lovedOfLovedOfLoved = array[lovedOfLovedPerson];
        if(lovedOfLovedOfLoved === personNumber){
            triangleCount++;
        }
    });

    return triangleCount/3;

};
