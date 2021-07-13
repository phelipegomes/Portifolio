import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Curriculum Vitae");
    }

    async getHtml() {
        return `
            <h1> Bem vindo ao Curriculum Vitae </h1>
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