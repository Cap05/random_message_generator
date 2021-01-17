/* Random Message Generator 
- Generate random message fortune each time program loads
- Three different array data structures will be randomly selected to form
a coherent message
*/

const message = {
    weekday: ['Monday', 'Tuesday', 'Wednesday', 
    'Thursday', 'Friday', 'Saturday', 'Sunday'],

    perspective: ['you will be gifted', 'your friends will get', 
    'you will buy'],

    news: ['a new car', 'a new house', 'a broken down car', 'a leaking house',
    'a computer with no available storage']

};

const generateMessage = () => {
    for (let i = 0; i < message.weekday.length; i++) {
        console.log(message.weekday[i]);
    }
}

generateMessage();