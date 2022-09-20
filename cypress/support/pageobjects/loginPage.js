
/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements()

class LoginPage {
    acessarSite() {
        cy.visit(Cypress.config("baseUrl"))
    }

    clicarBotaoPaginaLogin() {
        cy.get(loginElements.botaoLogin()).click()
    }

    preencherCampoEmail() {
        cy.get(loginElements.inputEmail()).type("lessicomchapeu@gmail.com")
    }

    preencherEspacoSenha() {
        cy.get(loginElements.inputSenha()).type("Senha123!")
    }

    clicarParaContinuar() {
        cy.get(loginElements.botaoContinuar()).click();
    }

    digitarBusca() {
        cy.get(loginElements.inputBusca()).type("iphone");
    }

    buscarProduto() {
        cy.get(loginElements.botaoBuscar()).click();
    }
}

export default LoginPage;