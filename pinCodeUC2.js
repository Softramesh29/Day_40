let sampleRegex = RegExp('^[1-9][0-9]{5}$')
let check = sampleRegex.test("A400088")

if(check === true){
    console.log("Your Pin Code is Valid")
} else {
console.log("Your Pin Code is InValid")
}
