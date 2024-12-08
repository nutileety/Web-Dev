function cutString(str, startStr, endStr) {
    let newStr = "";
    for(i=0; i<str.length; i++) {
        if(i>=startStr && i<endStr) {
            newStr = newStr + str[i];
        }
    }
    return newStr;
}
var value = "Virat Kohli";
console.log(cutString(value, 2, 5)); //rat