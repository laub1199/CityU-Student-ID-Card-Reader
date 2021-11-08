const { getDataFromAims } = require('../index')
const fs = require('fs');

test('check tmchan2 with path', async () => {
    const result = {
        sid: '51115127',
        name: 'CHAN Tai Man',
        under18: 'No',
        'student-status': 'Active',
        'enrolment-status': 'Enrolled 24-May-2021',
        'student-type': 'Regular Student',
        campus: 'Main Campus',
        level: "Bachelor's Degree",
        mode: 'Full-time',
        'admit-term': 'Direct',
        'senior-intake': 'No',
        college: 'College of Engineering (EG)',
        department: 'Computer Science (CS)',
        programme: 'Bachelor of Science (BSCEGU4)',
        cohort: '2018',
        degree: 'Bachelor of Science (BSC1)',
        'home-major': 'Computer Science (CSC)',
        gender: 'Male',
        eid: 'tmchan2',
        email: 'tmchan2-c@my.cityu.edu.hk'
    }
    expect(await getDataFromAims('./test-image/aims/tmchan2.png', true)).toEqual(result)
})

test('check tmchan2 with base64 string', async () => {
    const result = {
        sid: '51115127',
        name: 'CHAN Tai Man',
        under18: 'No',
        'student-status': 'Active',
        'enrolment-status': 'Enrolled 24-May-2021',
        'student-type': 'Regular Student',
        campus: 'Main Campus',
        level: "Bachelor's Degree",
        mode: 'Full-time',
        'admit-term': 'Direct',
        'senior-intake': 'No',
        college: 'College of Engineering (EG)',
        department: 'Computer Science (CS)',
        programme: 'Bachelor of Science (BSCEGU4)',
        cohort: '2018',
        degree: 'Bachelor of Science (BSC1)',
        'home-major': 'Computer Science (CSC)',
        gender: 'Male',
        eid: 'tmchan2',
        email: 'tmchan2-c@my.cityu.edu.hk'
    }
    const image = fs.readFileSync('./test-image/aims/tmchan2.png', {encoding: 'base64'})
    expect(await getDataFromAims(image)).toEqual(result)
})

test('check tmchan2 base64 image buffer', async () => {
    const result = {
        sid: '51115127',
        name: 'CHAN Tai Man',
        under18: 'No',
        'student-status': 'Active',
        'enrolment-status': 'Enrolled 24-May-2021',
        'student-type': 'Regular Student',
        campus: 'Main Campus',
        level: "Bachelor's Degree",
        mode: 'Full-time',
        'admit-term': 'Direct',
        'senior-intake': 'No',
        college: 'College of Engineering (EG)',
        department: 'Computer Science (CS)',
        programme: 'Bachelor of Science (BSCEGU4)',
        cohort: '2018',
        degree: 'Bachelor of Science (BSC1)',
        'home-major': 'Computer Science (CSC)',
        gender: 'Male',
        eid: 'tmchan2',
        email: 'tmchan2-c@my.cityu.edu.hk'
    }
    const image = fs.readFileSync('./test-image/aims/tmchan2.png', {encoding: 'base64'})
    const imageBuffer = Buffer.from(image, "base64");
    expect(await getDataFromAims(imageBuffer)).toEqual(result)
})
