export default class {
    email = ''
    number = ''
    address = ''

    form () {
        return `
            <div>
                <input placeholder="name" type="text" value="${this.email}" onchange="main.contact.email = this.value" />
                <input placeholder="surname" type="text" value="${this.number}" onchange="main.contact.number = this.value"/>
                <input placeholder="country" type="text" value="${this.address}" onchange="main.contact.address = this.value"/>
            </div>
        `
    }
}