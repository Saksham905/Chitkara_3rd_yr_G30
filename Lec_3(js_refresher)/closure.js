function outerFunction(){
    // let name="Saksham"

    return function innerFunction(){
        console.log("Hi! "+ name)
    }
}
let name="Saksham"
let a=outerFunction()

a()