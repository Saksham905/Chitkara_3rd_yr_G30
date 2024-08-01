const compress = () => {
    setTimeout(() => {
        console.log("Compressing the video...")
        upload()
    }, 3000)
}
const upload=()=>{
    setTimeout(()=>{
    console.log("uploading the video...")
    download()
    },5000)
}
const download=()=>{
    setTimeout(()=>{
        console.log("downloading the video...")
    },3000)
}
compress()
