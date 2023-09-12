class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId =  null;
  }

  start(printTimeCallback) {
    // ... your code goes here
  
    this.intervalId = setInterval(() => {
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
    if (digits.length === 1) {
      digits.unshift("0");
    }
    return digits.join('');
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    return this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds());
  }
}
