



function sortByLength(arr) {
	
	return [...arr].sort((a,b) => a.length - b.length)	
}


function removeSpaces(strWithSpaces) {
    const str = strWithSpaces.replace(/ /g, "");

}



function toArray(obj) {
    return Object.entries(obj);
}



function getNestedArrLength(arr) {
	return arr.flat(Infinity).length
}



