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
    if (this.currentTime !== 0) {
      return this.currentTime % 60;
    }
    else {
      return 0;
    }
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    const digits = value.toString().slice();
    if (digits.length === 2) {
      return digits[0] + digits[1];
    }
    else {
      return "0" + digits[0];
    }
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
