export default class {
    email = ''
    number = ''
    address = ''

    form () {
        return `
            <div>
                <input placeholder="email" type="text" value="${this.email}" onchange="main.contact.email = this.value" />
                <input placeholder="number" type="text" value="${this.number}" onchange="main.contact.number = this.value"/>
                <input placeholder="address" type="text" value="${this.address}" onchange="main.contact.address = this.value"/>
            </div>
        `
    }
}