import { LoginPage } from '../pages/LoginPage.js';

export class LoginTask {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  static withCredentials(email, password) {
    return new LoginTask(email, password);
  }

  async performAs(actor) {
    const page = actor.page;
    await page.fill(LoginPage.emailInput, this.email);
    await page.fill(LoginPage.passwordInput, this.password);
    await page.click(LoginPage.continueButton);
    await page.screenshot({ path: `evidencias/login_${this.email}.png`, fullPage: true });
  }
}
