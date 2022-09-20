class LoginElements {
    botaoLogin = () => '[data-testid="stereo-login_menu-unsigned_user_state-container"] > [data-testid="link"]'; 
  
    inputEmail = () => '#LoginBox-form > :nth-child(1) [name=login]';

    inputSenha = () => '#LoginBox-form > :nth-child(2) [name=password]';

    botaoContinuar = () => '#LoginBox-form > .LoginBox-form-continue';

    inputBusca = () => '#input-search';

    botaoBuscar = () => "[data-testid='search-submit']"
  }
  
  export default LoginElements;