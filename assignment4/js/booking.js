
export class Booking {
        constructor(bookForm, house) {
            this.bookForm = document.getElementById(bookForm);
            this.house = house;
           
            const h2 = document.getElementById('bookHouse');
            h2.textContent = `BOKA ${house.name.toUpperCase()}`;
            h2.classList.add('booking-title');
            this.bookForm.prepend(h2);

            this.date = this.bookForm.querySelector('#date');
            this.nights = this.bookForm.querySelector('#nights');
            this.code = this.bookForm.querySelector('#code');
            this.breakfast = this.bookForm.querySelector('#breakfast');
            this.seans = this.bookForm.querySelector('#seans');
            this.tour = this.bookForm.querySelector('#tour');
            this.total = this.bookForm.querySelector('#total-price');
            this.bookBtn = this.bookForm.querySelector('#bookBtn');
           

            this.init();
        }


        init() {
            this.countTotalPrice();
            this.bookForm.addEventListener('input', () => { this.countTotalPrice(); 
            });

            this.bookForm.addEventListener('submit', (e) => { 
                e.preventDefault();
                this.bookingConfirmation();
            });

        }


    formData() {
        return {
         dateValue: this.date.value,
         nightsValue: Number(this.nights.value),
         breakfastValue: this.breakfast.checked,
         seansValue: this.seans.checked,
         tourValue: this.tour.checked,
         codeValue: this.code.value
        };
       
    }
     totalPrice() {
        const formValue = this.formData();
         let totalPrice = this.house.pricePerNight * formValue.nightsValue;

        if (formValue.breakfastValue) {
            totalPrice += 100 * formValue.nightsValue;
        }
        if (formValue.seansValue) {
            totalPrice += 200;
        }
        if (formValue.tourValue) {
            totalPrice += 200;
        }
        if (formValue.codeValue === "GHOST20") {
            totalPrice *= 0.8;
        }
        return totalPrice; 
    }

    countTotalPrice() {
        this.total.textContent = `Totalpris: ${this.totalPrice()} kr`;
    }

    validate() {
        const dateStatus = document.getElementById('date-status');

        if (this.date.validity.valueMissing) {
            dateStatus.textContent = "Vänligen välj ett datum";
        } else if (this.date.validity.rangeUnderflow) {
            dateStatus.textContent = "Datumet får inte vara tidigare än dagens datum!";
        }

        const nightsStatus = document.getElementById('nights-status');

        if (this.nights.validity.valueMissing) {
            nightsStatus.textContent = "Vänligen ange antal nätter";
        } else if (this.nights.validity.rangeUnderflow) {
            nightsStatus.textContent = "Du måste boka minst 1 natt!";
        } else if (this.nights.validity.rangeOverflow) {
            nightsStatus.textContent = "Du kan boka max 14 nätter!";
        }
    }


    bookingConfirmation() {
        const summary = this.formData();
        const total = this.totalPrice();

         const confDiv = document.createElement('div');
        confDiv.classList.add('confirmation-div');

        const h3 = document.createElement('h3');
        h3.textContent = "Bokning bekräftad!";
        h3.classList.add('confirmation');

        const houseP = document.createElement('p');
        houseP.textContent = `${this.house.name.toUpperCase()}`;
        houseP.classList.add('confirmation-house');

        const dateP = document.createElement('p');
        dateP.textContent = "Incheckningsdatum: " + summary.dateValue;
        dateP.classList.add('confirmation-date');

        const nightsP = document.createElement('p');
        nightsP.textContent = "Antal nätter: " + summary.nightsValue;
        nightsP.classList.add('confirmation-nights');

        const codeP = document.createElement('p');
        const codeText = summary.codeValue ? "Kampanjkod: " + summary.codeValue : "";
        codeP.textContent = codeText;
        codeP.classList.add('confirmation-code');
        
        
        let checkedOptions = "Tillägg: ";
        const options = [];

        if (summary.breakfastValue) {
            options.push("Frukost");
        }
        if (summary.seansValue) {
            options.push("Nattlig seans");
        }
        if (summary.tourValue) {
            options.push("Spökvandring");
        }

        if (options.length > 0) {
            checkedOptions += options.join(", ");
        } else {
            checkedOptions += "Inga tillägg";
        }
       
        const optionsP = document.createElement('p');
        optionsP.textContent = checkedOptions;
        optionsP.classList.add('confirmation-options');

        const totalP = document.createElement('p');
        totalP.textContent = "Totalt pris: " + total + " kr";
        totalP.classList.add('confirmation-total');

        const greeting = document.createElement('p');
        greeting.textContent = "Tack för din bokning! Vi ser fram emot ditt besök!";
        greeting.classList.add('confirmation-greeting');

        confDiv.append(h3, houseP, dateP, nightsP, optionsP, codeP, totalP, greeting);
      
       this.bookForm.appendChild(confDiv);
    }
}