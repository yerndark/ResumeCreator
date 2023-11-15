export default class {
    name = ''
    surname = ''
    country = ''
    city = ''
    shortcut = ''

    form () {
        return `
            <div>
                <input placeholder="name" type="text" value="${this.name}" onchange="main.information.name = this.value" />
                <input placeholder="surname" type="text" value="${this.surname}" onchange="main.information.surname = this.value"/>
                <input placeholder="country" type="text" value="${this.country}" onchange="main.information.country = this.value"/>
                <input placeholder="city" type="text" value="${this.city}" onchange="main.information.city = this.value" />
                <input placeholder="shortcut" type="text" value="${this.shortcut}" onchange="main.information.shortcut = this.value"/>
            </div>
        `
    }
}