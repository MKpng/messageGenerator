const possibilityRandom = possibilities => {
    return possibilities[Math.floor(Math.random() * possibilities.length)];
};

const verbRandom = verbs => {
    return verbs[Math.floor(Math.random() * verbs.length)];
};

const gameRandom = gamesList => {
    return gamesList[Math.floor(Math.random() * gamesList.length)];
};

const generator = (a, b, c) => {
    return `You ${a} ${b} ${c}!`;
};

const possibility = ['should', 'might want to'];
const verb = ['hop on', 'try', 'play'];
const games = ['The Witcher 3', 
                'Cyberpunk 2077', 
                'Red Dead Redemption 2', 
                'The Last of Us',
                'Lethal Company',
                'Rainbow 6 Siege',
                'Fortnite',
                'Counter Strike 2',
                'Overwatch 2',
                'Warzone',
                'League of Legends',
                'Valorant',
                'Dota 2',
                'Borderlands',
                'Left 4 Dead 2'];

const possibilityResult = possibilityRandom(possibility);
const verbResult = verbRandom(verb);
const gameResult = gameRandom(games);
console.log(generator(possibilityResult, verbResult, gameResult));