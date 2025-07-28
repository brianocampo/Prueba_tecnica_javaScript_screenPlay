/**
 * Clase encargada de hacer clic en un elemento dentro de un Shadow DOM anidado.
 * 
 * Esta utilidad está diseñada para manejar componentes web personalizados 
 * que encapsulan su contenido en múltiples niveles de Shadow DOM (por ejemplo: siigo-web-components).
 *
 * La clase espera dos niveles de shadow roots: `host1` (contenedor externo) y `host2` (contenedor interno),
 * y luego busca el selector CSS del elemento a clicar dentro del segundo shadow root.
 *
 * @example
 * const selectorInfo = {
 *   host1: 'siigo-main-component',
 *   host2: 'siigo-sub-component',
 *   inner: 'button.confirm'
 * };
 * await ClickShadowElement.perform(selectorInfo, page);
 */
export class ClickShadowElement {
  static async perform(selectorInfo, page) {
    const { host1, host2, inner } = selectorInfo;

    try {
      // Espera hasta 20s que el botón esté listo dentro del shadow anidado
      await page.waitForFunction(
        ({ host1, host2, inner }) => {
          const waitFor = (hostSelector, root = document) => root.querySelector(hostSelector)?.shadowRoot;

          const shadow1 = waitFor(host1);
          if (!shadow1) return false;

          const shadow2 = waitFor(host2, shadow1);
          if (!shadow2) return false;

          const element = shadow2.querySelector(inner);
          return !!(element && element.offsetParent !== null);
        },
        { timeout: 20000 },
        { host1, host2, inner }
      );

      // Luego de esperar, haz el clic
      const clicked = await page.evaluate(({ host1, host2, inner }) => {
        const shadow1 = document.querySelector(host1)?.shadowRoot;
        const shadow2 = shadow1?.querySelector(host2)?.shadowRoot;
        const element = shadow2?.querySelector(inner);

        element?.click();
        return !!element;
      }, { host1, host2, inner });

      if (!clicked) {
        console.warn(`Elemento no clickeado: ${host1} > ${host2} > ${inner}`);
      }
    } catch (e) {
      console.error('Error al interactuar con Shadow DOM anidado:', e);
    }
  }
}
