import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Hard Skills");
    }

    async getHtml() {
        return `
            <h1> Bem vindo ao Hard Skills </h1>
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