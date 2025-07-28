import { DashboardPage } from '../pages/DashboardPage.js';
import { CustomerPage } from '../pages/CustomerPage.js';
import { FillShadowInputByLabel, FillShadowInputBySelector } from '../interactions/FillShadowInput.js';

export class CrearClienteTask {
  constructor() {
    
  }

  static createNewClient() {
    return new CrearClienteTask();
  }

  async performAs(actor) {
    const page = actor.page;
    // Generar un número aleatorio de 4 cifras como string
    const identificacion = this.generarCodigoNumerico();
    await page.click(DashboardPage.crearButton);
    await page.click(DashboardPage.clientesLink);
    await FillShadowInputByLabel(page, CustomerPage.nombreInput.host, CustomerPage.nombreInput.inner, 'Brian');
    await FillShadowInputByLabel(page, CustomerPage.apellidoInput.host, CustomerPage.apellidoInput.inner, 'Ocampo');
    await FillShadowInputByLabel(page, CustomerPage.identificacionInput.host, CustomerPage.identificacionInput.inner, '103759' + identificacion);
    await FillShadowInputBySelector(page, CustomerPage.ciudadInput.host, CustomerPage.ciudadInput.inner, 'Medellín');
    await page.waitForSelector('#tableAutocompletecity tbody', { state: 'visible' });
    await page.locator('#tableAutocompletecity tbody tr').nth(1).locator('td').nth(1).click();
    await page.click(CustomerPage.guardarButton);
    await page.screenshot({ path: `evidencias/login_${this.email}.png`, fullPage: true });
  }

  /**
   * Genera un número aleatorio de 4 dígitos como string (ej. '0274').
   *
   * @returns {string} Número aleatorio con 4 cifras.
   */
  generarCodigoNumerico() {
    return String(Math.floor(Math.random() * 10000)).padStart(4, '0');
  }
}
