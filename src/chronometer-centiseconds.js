class Chronometer {
  constructor() {
    // ... your code goes here
    this.intervalId = null;
    this.currentTime = 0;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 10);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor((this.currentTime % 6000) / 100);
  }

  getCentiseconds() {
    // ... your code goes here
    return (this.currentTime % 6000) % 100;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    const digits = value.toString().split('');
    if (digits.length === 1) {
      digits.unshift("0");
    }
    return digits.join('');
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
