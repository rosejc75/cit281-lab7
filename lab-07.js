/*
CIT 281: Lab 07
Name: Rose Carroll
*/
class CustomError extends Error {}
function throwGenericError(){
    throw new Error("Generic Error")
}

function throwCustomError(){
    throw new CustomError("Generic Error");
}
//a try... catch... finally block using the generic error
console.log("Force generic error");
try {
    console.log("Generic error try block");
    myError.throwGenericError();
} catch {
    console.log("Generic error catch block");
    console.log(`${error.name}: ${error.message}`);
} finally {
    console.log("Generic error finnaly block");
}

//a try... catch... finally block using the custom error
console.log("Force customer error");
try{
    console.log("Custom error try block");
} catch (error) {
    console.log("Custom error try block");
    console.log(`${error.name}: ${error.message}`);
}finally {
    console.log("Custom error finally block");
}