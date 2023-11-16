import experience from "./experience.js"

export default class {
    instances = []

    create () {
        let instance = new experience ( this.instances.length )
        this.instances.push( instance )
        this.renderExperiences()
    }

    renderExperiences () {
        let experience = ''; 

        for (let instance of this.instances) {
            experience += instance.form()
        }
        document.getElementById('experiences').innerHTML = experience
    }
 
    form () {
        return `
            <div>
                <div id="experiences"></div>
                <button onclick="main.experiences.create()">+</button>
            </div>
        `
    }

}