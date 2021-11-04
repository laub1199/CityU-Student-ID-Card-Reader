const tesseract = require("node-tesseract-ocr")

//helper functions

function keyCheck(str, arr) {
    let index = 1
    for (const s of arr) {
        if (str.includes(s)) {
            return index
        }
        index++
    }
    return 0
}

//module functions

async function getDataFromAims (imgPath) {
    const config = {
        lang: "eng",
        oem: 1,
        psm: 3,
    }
    return await tesseract.recognize(imgPath, config)
        .then((text) => {
            const lines = text.split('\n')
            const result = {
                'sid': '',
                'name': '',
                'under18': '',
                'student-status': '',
                'enrolment-status': '',
                'student-type': '',
                'campus': '',
                'level': '',
                'mode': '',
                'admit-term': '',
                'senior-intake': '',
                'college': '',
                'department': '',
                'programme': '',
                'cohort': '',
                'degree': '',
                'home-major': '',
                'gender': '',
                'eid': '',
                'email': ''
            }

            const targetAttr = ['Legal Name :', 'Under ', 'Student Status :', 'Enrolment Status :', 'Student Type :', 'Campus :', 'Level :', 'Mode :', 'Admit Type :', 'Senior-intake :',
                'College :', 'Department :', 'Programme :', 'Cohort :', 'Degree :', 'Home Major :', 'Gender :', 'EID']

            for (const line of lines) {
                const keyIndex = keyCheck(line, targetAttr)
                let key = ''
                if (line.includes('Student Status Information for:')) {
                    result['sid'] = /\(([^)]+)\)/.exec(line)[1]
                } else if (keyIndex) {
                    result[Object.keys(result)[keyIndex]] = /:(.*)/.exec(line)[1].trimStart()
                }
            }
            if (result.eid) {
                result.email = `${result.eid}-c@my.cityu.edu.hk`
            }
            return result
        })
        .catch((error) => {
            return error.message
        })
}

(async () => {
    const result = await getDataFromAims('./test-image/aims/tmchan2.png')
    console.log('=====================================================')
    console.log(result)
    console.log('=====================================================')
})()
