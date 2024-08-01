console.log(1)

let myPromise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("downloading the video...!")
    },3000)
})

myPromise
.then(()=>{
    console.log("Movie downloaded success")
})