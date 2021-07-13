import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Soft Skills");
    }

    async getHtml() {
        return `
            <h1> Bem vindo ao Soft Skills</h1>
            <p>
                Loren Ipsum dolen amet loren,Loren Ipsum dolen amet loren.
            </p>
            <p>
                Loren Ipsum dolen amet loren,Loren Ipsum dolen amet loren.
            </p>
            <p>
                Loren Ipsum dolen amet loren,Loren Ipsum dolen amet loren.
            </p>
        `;
    }
}