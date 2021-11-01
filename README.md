CityU Student Data Reader
=============
**This package allows you to read student data in Aims and Student ID Card from City University of Hong Kong with Tesseract OCR.**
**The original purpose is to enhance the online member registration of the City University of Hong Kong Students' Union.**

* **[Installation](installation)**
* **[Functions](functions)**

<a name="installation"></a>
#Installation
**Tesseract OCR is required for this package. You can either [Install Tesseract via pre-built binary package](https://tesseract-ocr.github.io/tessdoc/Home.html)
or [build it from source](https://tesseract-ocr.github.io/tessdoc/Compiling.html). Simple guide is provided in the following:**

**For Ubuntu**

    sudo add-apt-repository ppa:alex-p/tesseract-ocr-devel
    sudo apt-get update

**After installing Tesseract, can simply install this package with:**

    npm install cityu-student-data-reader

<a name="functions"></a>
#Functions

##getDataFromAims(imagePath)

##getDataFromIDCard(imagePath)

##getMergedData(imagePath)

