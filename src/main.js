import information from "./classes/information.js";
import contact from "./classes/contact.js";
import experiences from "./classes/experiences.js";

export default class {
    step = 0




    
    constructor () {
        this.content = document.getElementById('content')
        this.result = document.getElementById('result')
        this.generate ()
    }
    render () {
        switch (this.step) {
            case 0: this.content.innerHTML = this.information.form(); break;
            case 1: this.content.innerHTML = this.contact.form(); break;
            case 2: this.content.innerHTML = this.experiences.form(); this.experiences.renderExperiences() ;break;
        }
    }
    generate () {
        this.information = new information()
        this.contact = new contact()
        this.experiences = new experiences()

        this.render()
    }
    nextStep () {
        if (this.step != 2) {
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
