const app = "I don't do much.";

// const sensor = (word, string) => {
//   var regEx = new RegExp(word, 'p');
//   return string.replace(regex, 'BLEEP')
// } 

const digitalClock = {
  time: Math.round(Date.now() / 1000),
  startTicking() {
    setInterval(() => {
      this.time++;
    }, 1000);
  },
};

// function censor(word, string) {
//   var regex = new RegExp(word, 'g');
//   return string.replace(regex, 'BLEEP')
// }

const sensor = (word, string) => {
  var regEx = new RegExp(word, 'p');
  return string.replace(regex, 'BLEEP')
} 

const violenceCensor = censor.bind(null, 'violence');

const drugsCensor = censor.bind(null, 'drugs');