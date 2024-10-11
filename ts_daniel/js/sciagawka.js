
var empty = null; // null

var name = 'Bartek'; // string

var myNumber = 24; // number

var myArray = [1, 4, 5, 6, 7, 8, 10, 23, 53, 46, 45 ,65]; // array

var myObject = {
    name: 'Bartek',
    age: 33,
    city: 'Warsaw',
}; // object

var myBool = true; // boolean

var sayHello = function (name) { // function
    console.log('Witaj ' + name);
};


var mySchool = {
    students: 10,
    studentsNames: ['Adam', 'Ola', 'Mateusz', 'Kuba', 'Olaf', 'Adam', 'Monika', 'Adam', 'Ola', 'Mateusz'],
    teachers: 6,
    director: 1,
    classRooms: 3,
    name: 'Technischools',
    address: 'Adres szkoły',
    desks: 22,
}

function countCheck() {
    if (mySchool.students == mySchool.studentsNames.length) {
        console.log('Tak');
    
    } else {
        console.log('Nie');
    }
}

// countCheck();

function teacherCheck() {
    if (mySchool.teachers > mySchool.students) {
        console.log ('Tak');
    } else {
        console.log ('Nie');
    }
}
// teacherCheck();

function displayNames() {
    mySchool.studentsNames.map(function(name) {
        console.log(name);
    });
}
// displayNames();


function showNameAndAddress() {
    console.log('Nazwa Szkoły')
    console.log(mySchool.name);
    console.log('---')
    console.log('Adres szkoły');
    console.log(mySchool.address);

}
// showNameAndAddress();



function checkNames() {
    const helperArr = [];

    mySchool.studentsNames.map(function(name) {
        helperArr.map(function(helperName) {
            if (helperName === name) {
                console.log(name);
            }
        });

        helperArr.push(name);
    });
}

// checkNames();

function countCheck2() {
    if (mySchool.students*2 <= mySchool.desks) {
        console.log('Tak');
    
    } else {
        console.log('Nie');
    }
}

// countCheck2();

function classroomCheck() {
    if (mySchool.teachers >= mySchool.classrooms) {
        console.log('Tak');
    } else {
        console.log('Nie')
    }
}

// classroomCheck();

var bank = {
    id: 0,
    name: 'Mój Bank',
    subName: 'Najbezpieczniejszy bank w Polsce',
    password: 'supertajnehaslo123',
    value: 12000000,
    currency: 'zł',
    users: [
        {
            name: 'Bartek',
            id: 1,
            value: 16000,
            password: 'test123',
        },
        {
            name: 'Tomek',
            id: 2,
            value: 1000,
            password: 'admin123',
        },
        {
            name: 'Adam',
            id: 3,
            value: 216000,
            password: 'haslo123',
        },
    ],
    methods: {
        showName: function() {
            console.log('Witaj w ' + bank.name);
            console.log(bank.subName);
        },
        promo: function() {
            console.log('Wartosc naszego banku to: ' + bank.value + ' ' + bank.currency );
        },
        transfer: function(idSender, password, idReceiver, value) {
            var users = bank.users;
            var value = value;
            var password = password;
            var idSender = idSender;
            var idReceiver = idReceiver;

            var sender = null;
            var receiver = null;


            if (!idSender || !idReceiver || !value) {
                console.log('Arguments error');
                return;
            }

            users.map(function(user) {

                if (user.id === idSender) {
                    sender = user;
                }

                if (user.id === idReceiver) {
                    receiver = user;
                }
                
            });

            if (!sender || !receiver) {
                console.log('User error');
                return;
            }

            if (sender.password !== password) {
                console.log('Password error');
                return;
            }

            if (sender.value < value ) {
                console.log('Transfer error');
            } else {
                sender.value = sender.value - value;
                receiver.value = receiver.value + value;
            }

            console.log(sender.name + ' ' + sender.value);
            console.log(receiver.name + ' ' + receiver.value);
        }
    }
}

