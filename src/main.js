import information from "./classes/information.js";
import contact from "./classes/contact.js";


export default class {
    step = 0
    constructor () {
        this.content = document.getElementById('content')
        this.result = document.getElementById('result')

        this.information = new information()
        this.contact = new contact()

        this.render()
    }
    render () {
        switch (this.step) {
            case 0: this.content.innerHTML = this.information.form(); break;
            case 1: this.content.innerHTML = this.contact.form(); break;
            
            // TODO: realize the rest
        }
    }
    clear () {
        this.information = new information()
        this.contact = new contact()
        this.render()
    }
    nextStep () {
        if (this.step != 1) {
            this.step++;
        }
        this.render()
    }
    backStep () {
        if (this.step != 0) {
            this.step--;
        }
        this.render()
    }
    showResult () {
        this.result.innerHTML = `
            <h1>${this.information.name} ${this.information.surname}</h1>
            <div style="display:flex">
                <p>${this.contact.email}; </p>
                <p>${this.contact.number}; </p>
                <p>${this.contact.address}; </p>
            </div>
        `
    }
}
