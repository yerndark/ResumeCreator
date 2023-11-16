export default class {
    id = null
    company = ''
    position = ''
    city = ''
    date = {
        start: '',
        end: ''
    }
    constructor (id) {
        this.id = id
    }
    form () {
        return `
            <div>
                <input placeholder="company" type="text" value="${this.company}" onchange="main.experiences.instances[${this.id}].company = this.value" />
                <input placeholder="position" type="text" value="${this.position}" onchange="main.experiences.instances[${this.id}].position = this.value"/>
                <input placeholder="city" type="text" value="${this.city}" onchange="main.experiences.instances[${this.id}].city = this.value" />
                <input placeholder="start date" type="text" value="${this.date.start}" onchange="main.experiences.instances[${this.id}].date.start = this.value"/>
                <input placeholder="end date" type="text" value="${this.date.end}" onchange="main.experiences.instances[${this.id}].date.end = this.value"/>
            </div>
        `
    }

// <input placeholder="achievments" type="text" value="${this.achievments}" onchange="main.experiences.instances[${id}].achievments = this.value"/>
// achievments = []
}