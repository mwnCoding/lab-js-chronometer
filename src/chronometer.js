class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId =  null;
  }

  start(printTimeCallback) {
    // ... your code goes here
  
    const intervalId = setInterval(() => {
      this.currentTime += 1;
      console.log(this.currentTime);
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
  }



  getMinutes() {
    // ... your code goes here
    if (this.currentTime !== 0) {
      return Math.floor(this.currentTime/60);
    }
    else {
      return 0;
    }

  }

  getSeconds() {
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
