

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

    createRound() { //Simulerar matchen och bestämmer vinnaren
        if (this.played) { 
            return this.#winner; 
        }
        
        const skillA = this.players[0];
        const skillB = this.players[1];
        const chanceA = skillA.skillLevel / (skillA.skillLevel + skillB.skillLevel);

        this.#winner = Math.random() < chanceA ? skillA : skillB;
        this.played = true;

        if (this.matchDiv) {

            const playerA = this.matchDiv.querySelector('.player1');
            const playerB =this.matchDiv.querySelector('.player2');

            if (this.#winner === skillA) {
            playerA.classList.add('winner');
            playerB.classList.add('loser');
        } else {
            playerB.classList.add('winner');
            playerA.classList.add('loser');
        }
        console.log("Vinnare:", this.#winner);
    }
           return this.#winner;        
 }

    renderMatch() { //returnerar elementet som representerar matchen i DOM:en
        const div = document.createElement('div');
        div.classList.add('match');

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
        `; 
        this.matchDiv = div;
        return div;
    }

}

