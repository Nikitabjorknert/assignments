//Är ett tillstånd som ska förändras: 
// Den har två deltagare, 
// den kan spelas 
// och har en vinnare
//Dessa förändringar passar bra för en klass


/*-Matchklassen - Konstruktor, privata fält, getters, en metod -*/

//Toggle-knapp? på den klass med vinnare

export class Match {
#player1;
#player2;
#winner;
    constructor(player1, player2) {
        this.#player1 = player1;
        this.#player2 = player2;

        this.#winner = "";
        this.container = ""; //Hela diven som matchen renderas i, så att den kan uppdateras när matchen spelas
        this.played = false;
    } 

get players() {
    return `${this.#player1} vs ${this.#player2}`;
}
get winner() {
    return `${this.#winner}`;
}
get isPlayed() {
return this.played ? 'Game over' : 'Inte spelad än';
} 

renderMatch() {
const div = document.createElement('div');
div.classList.add('match');

const header = document.createElement('div');
header.classList.add('header');
header.textContent = this.players;

const status = document.createElement('div');
status.classList.add('status');
status.textContent = this.isPlayed;

const btn = document.createElement('button');
btn.classList.add('play-btn');
btn.textContent = 'Börja spela';
btn.addEventListener('click', () => {
this.play();
status.textContent = this.isPlayed; //Uppdaterar status på matchen när knappen klickas
});

div.append(header, status, btn); //Lägger till elementen i diven

this.container = div;
return div;
}

play() { //Kolla och gör om!!!
if (this.played) return;
this.#winner = Math.random() < 0.5 ? `${this.#player1} vinner!` : `${this.#player2} vinner!`;
this.played = true;
}
}

export const match1 = new Match('Alice', 'Bob'); //Ska man skriva ut deras namn eller ska det bli random?
document.querySelector('main').append(match1.renderMatch());



/*--

set winner(score) {
if (score === 1) {
this.#winner = this.#player1;
return;
} else if (score === 2) {
this.#winner = this.#player2;
return;
}
}


-*/