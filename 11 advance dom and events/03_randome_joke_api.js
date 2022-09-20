'use strict';

const jokes = [
  {
    category: 'Misc',
    type: 'single',
    joke: 'I went to the zoo the other day. There was only a dog in it – it was a shihtzu.',
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: true,
    },
    safe: false,
    id: 307,
    lang: 'en',
  },
  {
    category: 'Programming',
    type: 'single',
    joke: 'Four engineers get into a car. The car won\'t start.\nThe Mechanical engineer says "It\'s a broken starter".\nThe Electrical engineer says "Dead battery".\nThe Chemical engineer says "Impurities in the gasoline".\nThe IT engineer says "Hey guys, I have an idea: How about we all get out of the car and get back in".',
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false,
    },
    id: 132,
    safe: true,
    lang: 'en',
  },
  {
    category: 'Programming',
    type: 'single',
    joke: "I'd tell you a joke about NAT but I would have to translate.",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false,
    },
    safe: true,
    id: 319,
    lang: 'en',
  },
  {
    category: 'Programming',
    type: 'single',
    joke: "There are only 10 kinds of people in this world: those who know binary and those who don't.",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false,
    },
    id: 35,
    safe: true,
    lang: 'en',
  },
  {
    category: 'Programming',
    type: 'single',
    joke: "Debugging is like being the detective in a crime movie where you're also the murderer at the same time.",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false,
    },
    id: 42,
    safe: true,
    lang: 'en',
  },
  {
    category: 'Programming',
    type: 'single',
    joke: "Algorithm: A word used by programmers when they don't want to explain how their code works.",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false,
    },
    id: 51,
    safe: true,
    lang: 'en',
  },
  {
    category: 'Programming',
    type: 'single',
    joke: "Hey Girl,\nRoses are #ff0000,\nViolets are #0000ff,\nI use hex codes,\nBut I'd use RGB for you.",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false,
    },
    id: 41,
    safe: true,
    lang: 'en',
  },
  {
    category: 'Misc',
    type: 'single',
    joke: 'My husband and I were happy for 20 years. And then we met.',
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false,
    },
    safe: true,
    id: 273,
    lang: 'en',
  },
  {
    category: 'Programming',
    type: 'single',
    joke: 'UDP is better in the COVID era since it avoids unnecessary handshakes.',
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false,
    },
    id: 259,
    safe: true,
    lang: 'en',
  },
  {
    category: 'Pun',
    type: 'single',
    joke: 'Two fish in a tank. One turns to the other and says, "Do you know how to drive this thing?"',
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false,
    },
    id: 185,
    safe: true,
    lang: 'en',
  },
];
const jokeFinal = [];
jokes.forEach(function (aa) {
  jokeFinal.push(aa.joke);
});
console.log(jokeFinal.length);
const randomNumber = Math.trunc(Math.random() * 10) + 1;
console.log(jokeFinal[randomNumber]);