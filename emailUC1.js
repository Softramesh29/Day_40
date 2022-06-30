let sampleRegex = RegExp('^([a-z0-9]){1,}$')
let check = sampleRegex.test("softramesh29")

if(check === true){
    console.log("Your Email ID is Valid")
} else {
console.log("Your Email ID is InValid")
}