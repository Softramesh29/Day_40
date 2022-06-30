let sampleRegex = RegExp('^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$')
let check = sampleRegex.test("400 088")

if(check === true){
    console.log("Your Pin Code is Valid")
} else {
console.log("Your Pin Code is InValid")
}