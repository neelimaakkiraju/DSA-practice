//finding specific student name in an array

let myArray = ["john", "joseph" , "mike" , "joe" , "martin"]

//method1

let findName = "gbygb"

function myFun(allStudents , studentName){
    return allStudents.includes(studentName)?studentName:allStudents
}

console.log(myFun(myArray, findName))


//method2

function myFun2(allStudents2 , studentName2){
    for(let student of allStudents2){
       if(student === studentName2){
        return student
       }
    }
    return "student not found"
}

console.log(myFun2(myArray, "john"))