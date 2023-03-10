const tasks = ['nauka progromowania', 'nauka matematyki',
'nauka bez danych'];
const [task1, task2, task3] = tasks;

const courceData = {
    name: 'Projektowanie i programowanie front-end',
    shortcut: 'PPFront',
    year: '2',
    content: {
        types: {
            lectures: true,
            laboratories: true,
            projects: true
        },
        hours: {
            lectures: 15,
            laboratories: 15,
            projects: 15
        }
    }
}

const {lectures, laboratories, projects} = courceData.content.hours;
const lecturesHours = courceData.hours.lectures;