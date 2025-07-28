/**
 * Mapa de selectores para la pantalla de inicio de sesión.
 *
 * Este objeto representa los elementos clave del formulario de autenticación y 
 * un identificador del dashboard, utilizado por las Tasks e Interactions que 
 * automatizan el flujo de login dentro del patrón Screenplay.
 */
export const LoginPage = {
  /**
   * Campo de correo electrónico en el formulario de login.
   * 
   * Selector directo de input: `#siigoSignInName`
   * 
   * Este campo debe completarse con la dirección de correo del usuario.
   */
  emailInput: '#siigoSignInName',

  /**
   * Campo de contraseña en el formulario de login.
   * 
   * Selector directo de input: `#siigoPassword`
   * 
   * Este campo acepta la contraseña del usuario.
   */
  passwordInput: '#siigoPassword',

  /**
   * Botón "Continuar" para enviar las credenciales ingresadas.
   * 
   * Selector directo de botón: `#siigoNext`
   * 
   * Al hacer clic, se dispara el proceso de autenticación.
   */
  continueButton: '#siigoNext',

  /**
   * Logo visible en el panel principal del dashboard.
   * 
   * Este elemento está encapsulado dentro de un Shadow DOM, por lo que requiere
   * acceso especial a través de su host (`siigo-header-molecule`) y su selector interno (`a.brand-logo`).
   * 
   * Se utiliza comúnmente como verificación visual de que el usuario ha iniciado sesión correctamente.
   */
  dashboardLogo: {
    host: 'siigo-header-molecule',
    inner: 'a.brand-logo',
  }
};
