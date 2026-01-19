// valid parentheses

function validParentheses(str){
   let map = {
    "[" : "]",
    "{":"}",
    "(":")"
   }

   let stack =[]

   for(let i =0 ; i< str.length; i++){
    if(map[str[i]]){
        stack.push(str[i])
    }else{
        let top = stack.pop()
        if(!top || str[i] !== map[top]){
            return false
        }
    }
   }

   return stack.length === 0
}

console.log(validParentheses("[}"))

console.log(validParentheses("()[]{}"))