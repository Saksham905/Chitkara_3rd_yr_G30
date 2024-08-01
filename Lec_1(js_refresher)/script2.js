console.log(1)

function second(three){
   setTimeout(()=>{
   console.log(2)
   three()
   },3000)
}

function three(){
    console.log(3)
}

second(three)