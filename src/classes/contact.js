export default class {
    email = ''
    number = ''
    address = ''

    form () {
        return `
            <div>
                <input placeholder="email" value="${this.email}" onchange="main.contact.email=this.value" />
                <input placeholder="number" value="${this.number}" onchange="main.contact.number=this.value" />
                <input placeholder="address" value="${this.address}" onchange="main.contact.address=this.value" />
            </div>
        `
    }
}