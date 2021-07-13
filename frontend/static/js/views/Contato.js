import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Contato");
    }

    async getHtml() {
        return `
            <h1> Bem vindo ao Contato </h1>
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