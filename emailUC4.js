let sampleRegex = RegExp('^([a-z0-9]+)(\\.[a-z]+)?@([a-z0-9]+)\\.([a-z]{2,8})(\\.[a-z]{2,8})?$')
let check = sampleRegex.test("abc.xyz@bridgelabz.co.in")

if(check === true){
    console.log("Your Email ID is Valid")
} else {
console.log("Your Email ID is InValid")
}