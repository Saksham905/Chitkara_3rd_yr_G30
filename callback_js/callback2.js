const compress = (upload) => {
    setTimeout(() => {
        console.log("Compressing the video...")
        upload(()=>{
            setTimeout(()=>{
             console.log("Downloading the video...")
            },3000)
        })
    }, 3000)
}

compress((download)=>{
    setTimeout(()=>{
     console.log("uploading the video...")
     download()
    },3000)
})

