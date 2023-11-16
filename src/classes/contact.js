export default class {
    email = ''
    number = ''
    address = ''

    form () {
        return `
            <div style="display: flex; justify-content:center; width:50%;">
            <fieldset>
                <input class="ghost-input" placeholder="Почта" value="${this.email}" onchange="main.contact.email=this.value" />
                <input class="ghost-input" placeholder="Номер телефона" value="${this.number}" onchange="main.contact.number=this.value" />
                <input class="ghost-input" placeholder="Адрес" value="${this.address}" onchange="main.contact.address=this.value" />
            </fieldset>
            </div>
        `
    }
}