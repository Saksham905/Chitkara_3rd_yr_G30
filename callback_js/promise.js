const compress = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("compressing the video...")
            resolve()
        }, 3000)
    })
}


const upload = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("uploading the video...")
            resolve()
        }, 3000)
    })
}


const download = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                console.log("downloading the video...")
                resolve()
            }, 3000)
        }
        else {
            reject()
        }
    })
}

const run = async () => {
    try {
    compress()
     console.log("hi this side")
     await upload()
     await download()
    }
    catch (err) {
        console.log(err)
    }
}

run()

// compress()
//     .then(() => upload())
//     .then(() => download())
//     .catch(() => console.log("Error aa gaya"))

