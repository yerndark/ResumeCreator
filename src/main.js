import information from "./classes/information.js";
import contact from "./classes/contact.js";


export default class {
    step = 0

    constructor () {
        this.content = document.getElementById('content')
        this.result = document.getElementById('result')
        this.refresh ()
    }
    render () {
        switch (this.step) {
            case 0: this.content.innerHTML = this.information.form(); break;
            case 1: this.content.innerHTML = this.contact.form(); break;
    
        }
    }
    refresh () {
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
        this.content.innerHTML = `
            <button class="card">
            <div class="row clearfix">
              <div class="left big">${this.contact.number}</div>
              <div class="right">
                <p>
                    <span class="big">${this.information.company}</span>
                </p>
                <p>
                    <span class="med no-space">${this.information.companyInfo}</span>
                </p>
                </div>
            </div>
            <div class="row">
              <p><span class="big">${this.information.name} ${this.information.surname}</span></p>
              <p><span class="big">${this.information.position}</span></p>
            </div>
            <div class="row">
              <p><span class="med">${this.information.country}, ${this.information.city}; ${this.contact.address}; ${this.contact.email}</span>
              </p>
            </div>
          </button>
        `
    }
}
