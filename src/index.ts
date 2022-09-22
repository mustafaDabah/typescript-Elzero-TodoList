const secondsHand = document.getElementById('seconds-hand') as HTMLDivElement;
const hoursHand = document.getElementById('hours-hand') as HTMLDivElement;
const minutesHand = document.getElementById('minutes-hand') as HTMLDivElement;

function getTime():void {
    const now: Date = new Date();
    const seconds: number = now.getSeconds();
    const hours: number = now.getHours();
    const minutes: number = now.getMinutes();
    const timeInterval: number = 6 ; 
    console.log(seconds);

    secondsHand.style.transform = `rotate(${seconds * timeInterval}deg)`
    minutesHand.style.transform = `rotate(${minutes * timeInterval + seconds / 10 }deg)`
    hoursHand.style.transform = `rotate(${hours * 30 / 2}deg)`
}

setInterval(() => getTime(), 100)