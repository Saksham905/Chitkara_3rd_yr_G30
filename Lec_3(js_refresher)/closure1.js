function outerFunction(){
    let a=1

    return function innerFunction(){
        a++
        console.log(a)
    }
}

let x=outerFunction()
x()
x()

let y=outerFunction()
// y()