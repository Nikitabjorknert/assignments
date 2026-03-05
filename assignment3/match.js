

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
        const skillA = this.players[0].skillLevel;
        const skillB = this.players[1].skillLevel;
        const chanceA = skillA / (skillA + skillB);

        this.#winner = Math.random() < chanceA ? skillA : skillB;

        this.played = true;
        this.renderDom();

        if (this.#winner === skillA) {
            this.div.querySelector('.player1').classList.add('winner');
        } else {
            this.div.querySelector('.player2').classList.add('winner');
        }
        console.log("Vinnare:", this.#winner);

        if (this.#winner !== skillA) {
            this.div.querySelector('.player1').
            classList.add('loser');
        } else {
            this.div.querySelector('.player2').classList.add('loser');
        }

        return this.#winner;
        //Den med högst skillLevel har störst chans att vinna
    }

    renderMatch() { //returnerar elementet som representerar matchen i DOM:en
        const div = document.createElement('div');
        div.classList.add('match');

//KOLLA VAD SOM MENAS MED STANDARDVÄRDE I RENDERING AV SAKNADE VÄRDEN
        div.innerHTML = `
            <div class='containerDiv'>
            <div class='player1'>
            <h3>${this.#player1.name}</h3>
            <p>Skillevel: ${this.#player1.skillLevel}</p>
             <p>${this.#player1.catchphrase === "..." ? "" : this.#player1.catchphrase ?? ""}</p>
           </div>

            <h5>VS</h5>
           
            <div class='player2'>
            <h3>${this.#player2.name}</h3>
            <P>Skillevel: ${this.#player2.skillLevel}</P>
             <p>${this.#player2.catchphrase === "..." ? "" : this.#player2.catchphrase ?? ""}</p>
            </div>
            </div>
        `; //Om spelarens catchphrase är "..." returneras "", annars returneras spelarens catchphrase. Om catchphrase är null eller undefines returneras en tom stäng

        this.div = div;
        this.renderDom();
        return div;
    }

    renderDom() { //Uppdaterar matchens utseende baserat på dess tillstånd
        if (!this.matchDiv) return;
    }

    renderSemi() {
        let semiPlayers = [];
        semiPlayers = this.#winner;

        const semi = semiPlayers.map(s => s.this.#winner);
    }
}

