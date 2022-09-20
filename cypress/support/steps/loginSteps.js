
import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

Given("acesso o site Magazine Luiza", () => {
    loginPage.acessarSite();
})

When("acesso a pagina de login", () => {
    loginPage.clicarBotaoPaginaLogin();
})

And("coloco e-mail", () => {
    cy.wait(2000)
    loginPage.preencherCampoEmail();
})

And("coloco senha e aperto continuar", () => {
    loginPage.preencherEspacoSenha();
    loginPage.clicarParaContinuar();
})


Then("devo ir em buscar um iphone", () => {
    cy.wait(15000);
    loginPage.digitarBusca();
    cy.wait(1000);
    loginPage.buscarProduto();
})