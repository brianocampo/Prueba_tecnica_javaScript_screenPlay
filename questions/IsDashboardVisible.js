import { LoginPage } from '../pages/LoginPage.js';

/**
 * Question que permite verificar si el usuario se encuentra en el Dashboard.
 * 
 * Se basa en la visibilidad del logo que está contenido dentro de un Shadow DOM,
 * utilizando los selectores definidos en LoginPage.dashboardLogo.
 */
export class IsDashboardVisible {
  async answeredBy(actor) {
    const page = actor.page;
    const { host, inner } = LoginPage.dashboardLogo;

    try {
      // Espera hasta 10s a que el componente host esté en el DOM
      await page.waitForSelector(host, {
        state: 'attached',
        timeout: 10000,
      });

      // Evalúa si el logo es visible dentro del shadow DOM
      const isVisible = await page.evaluate(({ host, inner }) => {
        const root = document.querySelector(host);
        if (!root || !root.shadowRoot) return false;

        const logo = root.shadowRoot.querySelector(inner);
        return !!(logo && logo.offsetParent !== null);
      }, { host, inner });

      return isVisible;
    } catch (e) {
      console.warn('El logo del dashboard no se encontró o no fue visible a tiempo.');
      return false;
    }
  }

  /**
   * Instancia la pregunta `IsDashboardVisible` de forma fluida.
   */
  static isVisible() {
    return new IsDashboardVisible();
  }
}
