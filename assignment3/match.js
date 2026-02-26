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

        this.#winner = null;
        this.played = false;
        this.matchDiv = null;
    } 

get players() {
    return [this.#player1, this.#player2];
}

get winner() {
    return this.#winner;
}

get isPlayed() {
    return this.played;
}

play() { //Simulerar matchen och bestämmer vinnaren
    if (this.played) return; //Förhindrar att matchen spelas flera gånger
    this.#winner = Math.random() < 0.5 ? this.#player1 : this.#player2;
    this.played = true;
    this.renderDom();
}

renderMatch() { //returnerar elementet som representerar matchen i DOM:en
    const div = document.createElement('div');
    div.classList.add('match');

    const button = document.createElement('button');
    button.classList.add('play-btn');
    button.textContent = 'Spela kvartsfinal';

    button.addEventListener('click', () => this.play()); 
   
        div.appendChild(button);

        div.innerHTML = `
            <div>
            <h3>${this.#player1.name}</h3>
            <p>${this.#player1.catchphrase ?? ""}</p>
           
            <h5>VS</h5>
           
            <h3>${this.#player2.name}</h3>
            <p>${this.#player2.catchphrase ?? ""}</p>
            </div>
        `;

        this.matchDiv = div;
        this.renderDom();
        return div;
    };

    renderDom() { //Uppdaterar matchens utseende baserat på dess tillstånd
        if (!this.matchDiv) return;
        
        const status = document.createElement('p');
        status.classList.add('status');
        this.matchDiv.appendChild(status);

        const statusElement = this.matchDiv.querySelector('.status');
        statusElement.classList.add('status');

        const button = this.matchDiv.querySelector('.play-btn');

        if (!this.played) {
            statusElement.textContent = 'Inte spelad';
            //button.disabled = false;
        } else {
            statusElement.textContent = `Vinnare: ${this.#winner.name}`;
            button.disabled = true;
        }
    }
    
}

 /*- const btn = document.createElement('button');
    btn.classList.add('play-btn');
    btn.textContent = 'Simulera kvartsfinal';
    btn.addEventListener('click', () => {
        this.played = true;
        this.renderPlayers();
    });
-*/
