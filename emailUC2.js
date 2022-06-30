let sampleRegex = RegExp('^([a-z0-9]+)@([a-z0-9]+)$')
let check = sampleRegex.test("abc@bridgelabz")

if(check === true){
    console.log("Your Email ID is Valid")
} else {
console.log("Your Email ID is InValid")
}