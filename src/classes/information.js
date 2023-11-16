export default class {
    name = ''
    surname = ''
    country = ''
    city = ''
    position = ''
    company = ''
    companyInfo= ''

    form () {
        return `
            <div style="display: flex; justify-content:center; width:50%;">
            <fieldset>
            
                <input class="ghost-input" placeholder="Имя" type="text" value="${this.name}" onchange="main.information.name = this.value" />
                <input class="ghost-input" placeholder="Фамилия" type="text" value="${this.surname}" onchange="main.information.surname = this.value"/>
                <input class="ghost-input" placeholder="Страна" type="text" value="${this.country}" onchange="main.information.country = this.value"/>
                <input class="ghost-input" placeholder="Город" type="text" value="${this.city}" onchange="main.information.city = this.value" />
                <input class="ghost-input" placeholder="Должность" type="text" value="${this.position}" onchange="main.information.position = this.value"/>
                <input class="ghost-input" placeholder="Компания" type="text" value="${this.company}" onchange="main.information.company = this.value" />
                <input class="ghost-input" placeholder="Компания дополнительно" type="text" value="${this.companyInfo}" onchange="main.information.companyInfo = this.value"/>
            
            </fieldset>
            </div>
           
             
                  
        `
    }
}