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
    'a computer with no available storage', 'a chair with no legs']

};

const generateMessage = () => {
    let randomWeekday = message.weekday[Math.floor(Math.random() * 
        message.weekday.length)];
    
    let randomPerspective = message.perspective[Math.floor(Math.random() * 
        message.perspective.length)]; 
    
    let randomNews = message.news[Math.floor(Math.random() * 
        message.news.length)];


    console.log(`Here is your fortune: on ${randomWeekday}, ${randomPerspective} ${randomNews}. 
    Take it as you will, I'm not a real fortune teller!`);
}

generateMessage();