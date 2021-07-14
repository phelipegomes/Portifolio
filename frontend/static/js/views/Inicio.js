import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Início");
    }

    async getHtml() {
        return `
            <style>
            body
            {
                background-image: url("../static/images/background-3.jpg")!important;
                background-repeat: no-repeat;
                background-size: auto;
                background-attachment: fixed;
                
            }
            </style>

            <script>
           
            const titulo = document.querySelector('h1');
            typeWriter(titulo);
            </script>
        
            <h1> Bem vindo ao inicio do site huehue </h1>
            <p>
                Loren Ipsum dolen amet loren,Loren Ipsum dolen amet loren.
            </p>
            <p>
                Loren Ipsum dolen amet loren,Loren Ipsum dolen amet loren.
            </p>
            <p>
                Loren Ipsum dolen amet loren,Loren Ipsum dolen amet loren.
            </p>
            <h1> Bem vindo ao inicio do site </h1>
            <p>
                Loren Ipsum dolen amet loren,Loren Ipsum dolen amet loren.
            </p>
            <p>
                Loren Ipsum dolen amet loren,Loren Ipsum dolen amet loren.
            </p>
            <p>
                Loren Ipsum dolen amet loren,Loren Ipsum dolen amet loren.
            </p>
            <h1> Bem vindo ao inicio do site </h1>
            <p>
                Loren Ipsum dolen amet loren,Loren Ipsum dolen amet loren.
            </p>
            <p>
                Loren Ipsum dolen amet loren,Loren Ipsum dolen amet loren.
            </p>
            <p>
                Loren Ipsum dolen amet loren,Loren Ipsum dolen amet loren.
            </p>
            <h1> Bem vindo ao inicio do site </h1>
            <p>
                Loren Ipsum dolen amet loren,Loren Ipsum dolen amet loren.
            </p>
            <p>
                Loren Ipsum dolen amet loren,Loren Ipsum dolen amet loren.
            </p>
            <p>
                Loren Ipsum dolen amet loren,Loren Ipsum dolen amet loren.
            </p>
            <h1> Bem vindo ao inicio do site </h1>
            <p>
                Loren Ipsum dolen amet loren,Loren Ipsum dolen amet loren.
            </p>
            <p>
                Loren Ipsum dolen amet loren,Loren Ipsum dolen amet loren.
            </p>
            <p>
                Loren Ipsum dolen amet loren,Loren Ipsum dolen amet loren.
            </p>
            <h1> Bem vindo ao inicio do site </h1>
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