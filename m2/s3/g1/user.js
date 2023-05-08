class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    compareAge(user1) {
        if(user1.age > this.age) {
            console.log('user1 è più grande di user2');
        }else {
            console.log('user2 è più grande di user1');
        }
    }
}

const user1 = new User('Gabriele', 'Farci', '20', 'Rome')
console.log(user1);

const user2 = new User('Mario', 'Rossi', '30', 'Milan')
user2.compareAge(user1);
console.log(user2);