
export class Booking {
        constructor(bookForm, house) {
            this.bookForm = document.getElementById(bookForm);
            this.house = house;
           
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

    bookingConfirmation() {
        const summary = this.formData();
        const total = this.totalPrice();

         const confDiv = document.createElement('div');
        confDiv.classList.add('confirmation-div');

        const h3 = document.createElement('h3');
        h3.textContent = "Bokning bekräftad!";
        h3.classList.add('confirmation');

        const houseP = document.createElement('p');
        houseP.textContent = `${this.house.name}`;

        const dateP = document.createElement('p');
        dateP.textContent = "Incheckning: " + summary.dateValue;

        const nightsP = document.createElement('p');
        nightsP.textContent = "Antal nätter: " + summary.nightsValue;

        const codeP = document.createElement('p');
        codeP.textContent = "Kampanjkod: " + summary.codeValue;

        
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

        const totalP = document.createElement('p');
        totalP.textContent = "Totalt pris: " + total + " kr";
        
        confDiv.append(h3, houseP, dateP, nightsP, codeP, optionsP, totalP);
      
        document.body.appendChild(confDiv);
    }
}