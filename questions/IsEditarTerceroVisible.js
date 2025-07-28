import { CustomerPage } from '../pages/CustomerPage.js';

export class IsEditarTerceroVisible {
  async answeredBy(actor) {
    const page = actor.page;

    try {
      // Espera hasta 10s que el botón esté visible en el DOM
      await page.waitForSelector(CustomerPage.editarTerceroButton, {
        state: 'visible',
        timeout: 10000,
      });

      return await page.locator(CustomerPage.editarTerceroButton).isVisible();
    } catch (e) {
      console.warn('El botón "Editar tercero" no se encontró o no se mostró a tiempo');
      return false;
    }
  }

  static isVisible() {
    return new IsEditarTerceroVisible();
  }
}
