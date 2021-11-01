const tesseract = require("node-tesseract-ocr")

function getDataFromAims (imgPath) {
    const config = {
        lang: "eng",
        oem: 1,
        psm: 3,
    }
    tesseract.recognize(imgPath, config)
        .then((text) => {
            console.log("Result:", text)
        })
        .catch((error) => {
            console.log(error.message)
        })
}

getDataFromAims('./test-image/aims/tmchan2.png')
