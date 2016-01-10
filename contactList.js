//JavaScript Program that creates an object containing contact information
//also uses object methods with for-in loops to print detail syntax

var friends = {};

friends.bill = {
    firstName: 'Bill',
    lastName: 'Nye',
    number: '800-555-5555',
    address: ['One Microsoft Way','Redmond','WA','98052']
};
friends.steve = {
    firstName: 'Steve',
    lastName: 'Jobs',
    number: '800-545-5555',
    address: ['One Apple Way','San Francisco','CA','94122']
};

var list = function (object) {
    for (var key in object) {
        console.log(key); 
    };
}; 

friends.detailList = function() {
    for (var key in friends) {
        console.log("First Name: " + friends[key].firstName + "\nLast Name: " + friends[key].lastName + "\nNumber: " + friends[key].number + "\nAddress: " + friends[key].address[0] + "\n\t " + friends[key].address[1] + ", " + friends[key].address[2] + " " + friends[key].address[3]);
    };
};

var search = function (name) {
    for (var key in friends) {
        if (name === friends[key].firstName) {
            console.log(friends[key]);
            return friends[key];
        };
    };
};    

friends.detailList();
