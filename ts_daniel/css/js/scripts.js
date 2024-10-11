// LESSONS PLAN
var date = new Date();
var day = date.getDay();

// Pn - 1
// Wt - 2
// Śr - 3
// Cz - 4
// Pt - 5

var daySelector = 'day-' + day;
var todayPlan = document.getElementById(daySelector);

if (todayPlan) {
    todayPlan.style.display = 'block';
} else {
    var weekend = document.getElementById('weekend');
    weekend.style.display = 'block';
}

// CLOCK
var clock = document.getElementById('currentTime');

var setTime = function() {
    var dateClock = new Date();
    var hours = dateClock.getHours();
    var minutes = dateClock.getMinutes();
    var seconds = dateClock.getSeconds();
    var time = {
        hours: hours < 10 ? '0' + hours : hours,
        minutes: minutes < 10 ? '0' + minutes : minutes,
        seconds: seconds < 10 ? '0' + seconds : seconds
    }

    clock.innerText = time.hours + ':' + time.minutes + ':' + time.seconds;
}

var startClock = setInterval(setTime, 1000);

// TIMER
var hoursTimer = date.getHours(); // 0 - 23
var minutesTimer = date.getMinutes(); // 0 - 59
var secondsTimer = date.getSeconds(); // 0 - 59

var timeTimer = hoursTimer + ':' + minutesTimer ;

var lessonsHours = {
    1: ['08:55', '09:40'],
    2: ['09:50', '10:35'],
    3: ['10:50', '11:35'],
    4: ['11:45', '12:30'],
    5: ['13:00', '13:45'],
    6: ['14:00', '14:45'],
    7: ['14:55', '15:40'],
    8: ['15:45', '16:30'],
}

var setTimer = function() {
    var counterDate = new Date();
    var time = counterDate.getHours() + ':' + counterDate.getMinutes();
    var config = lessonsHours;

    var hour = Number(time.split(':')[0]);
    var minute = Number(time.split(':')[1]);

    var lesson = false;

    for (key in config) {
        var lessonTimes = config[key];
        
        var lessonHourStart = Number(lessonTimes[0].split(':')[0]);
        var lessonMinuteStart = Number(lessonTimes[0].split(':')[1]);
        var lessonHourStop = Number(lessonTimes[1].split(':')[0]);
        var lessonMinuteStop = Number(lessonTimes[1].split(':')[1]);

        var lessonElem = document.getElementById('l-' + key);
        var subjectElem = document.getElementById('day-'+ day + '-' + 's-' + key);

        lessonElem.style.fontWeight = 'normal';
        lessonElem.style.color = 'inherit';

        subjectElem.style.fontWeight = 'normal';
        subjectElem.style.color = 'inherit';

        if (
            (lessonHourStart <= hour && lessonHourStop >= hour) &&
            (hour === lessonHourStart && hour !== lessonHourStop ? minute >= lessonMinuteStart : minute < lessonMinuteStop)
        ) {
            lesson = true;

            // set current lesson time
            lessonElem.style.fontWeight = 'bold';
            lessonElem.style.color = 'black';

            // set current subject name
            subjectElem.style.fontWeight = 'bold';
            subjectElem.style.color = 'black';

            var lessonTimeEnd = lessonsHours[key][1].split(':');

            var currentTimeCounter = [counterDate.getHours(), counterDate.getMinutes(), counterDate.getSeconds()];
            var lessonTimeEndCounter = [Number(lessonTimeEnd[0]), Number(lessonTimeEnd[1])-1, 60];

            var timeToEnd = [];

            if (lessonTimeEndCounter[0] - currentTimeCounter[0]) {
                timeToEnd[0] = (60 + lessonTimeEndCounter[1]) - currentTimeCounter[1];
            } else {
                timeToEnd[0] = lessonTimeEndCounter[1] - currentTimeCounter[1];
            }

            timeToEnd[1] = lessonTimeEndCounter[2] - currentTimeCounter[2];

            if (timeToEnd[1] < 10) {
                timeToEnd[1] = '0' + timeToEnd[1];
            }
            if (timeToEnd[1] === 60) {
                timeToEnd[0] = timeToEnd[0] + 1; 
                timeToEnd[1] = '00';
            }

            document.getElementById('counter').innerText = 'Do końca zostało: ' + timeToEnd[0] + ':' + timeToEnd[1];
        }
    }

    if (lesson) {
        document.getElementById('lesson-info').innerText = 'Lekcja trwa';
    } else {
        document.getElementById('counter').style.display = 'none';
        document.getElementById('lesson-info').innerText = 'Mamy przerwę';
    }
}

var startTimer = setInterval(setTimer, 1000);

