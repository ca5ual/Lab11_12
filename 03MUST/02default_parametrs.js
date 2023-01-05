//ES 6 
function getItems (url, offset = 0, limit = 10, orderBy = "date") {
    return url;
}

//Parametry domyslne sa rowniez oblugiwane za pomoca funckcji arrow
const getItemsA = (url, offset = 0, limit = 10, orderBy = "date") => {};

//add (1)
//ass (1,2)

function add (a, b = 0) {
    return a+b;
}

//takie samo jak
const addA = (a, b = 0) => a + b;

//i takie samo jak:
function addB (a,b) {
    b = b === undefined ? 0 : b;
    return a + b;
}