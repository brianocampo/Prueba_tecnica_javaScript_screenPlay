/**
 * Llena un campo de texto dentro de un componente web con Shadow DOM, 
 * utilizando una etiqueta visible como referencia para ubicar el componente.
 *
 * @param {import('playwright').Page} page - Instancia de la página de Playwright.
 * @param {string} hostSelector - Selector del componente host que contiene el Shadow DOM.
 * @param {string} labelText - Texto visible de la etiqueta (label) que identifica el campo a llenar.
 * @param {string} value - Valor a escribir en el campo de texto.
 *
 * @example
 * await FillShadowInputByLabel(page, 'siigo-textfield-web', 'Nombres', 'Carlos');
 */
export async function FillShadowInputByLabel(page, hostSelector, labelText, value) {
  const component = await page.locator(hostSelector).filter({ hasText: labelText }).first();
  const shadowRoot = await component.evaluateHandle(el => el.shadowRoot);
  const input = await shadowRoot.evaluateHandle(root => root.querySelector('input'));
  await input.evaluate(el => el.value = ''); 
  await input.type(value);
}


/**
 * Llena un campo de texto específico dentro de un componente web con Shadow DOM,
 * accediendo directamente mediante un selector CSS del input interno.
 *
 * Este método se recomienda cuando el input no tiene una etiqueta visible clara 
 * o cuando necesitas apuntar directamente a un input específico dentro del Shadow DOM.
 *
 * @param {import('playwright').Page} page - Instancia de la página de Playwright.
 * @param {string} hostSelector - Selector del componente host que contiene el Shadow DOM.
 * @param {string} inputSelector - Selector del input dentro del Shadow DOM (ej: '#inputAutocompletecity').
 * @param {string} value - Valor a escribir en el input.
 *
 * @example
 * await FillShadowInputBySelector(page, 'siigo-autocomplete-web', '#inputAutocompletecity', 'Bogotá');
 */
export async function FillShadowInputBySelector(page, hostSelector, inputSelector, value) {
  await page.locator(hostSelector).first().click();
  const component = await page.locator(hostSelector).first().elementHandle();
  const shadowRoot = await component.evaluateHandle(el => el.shadowRoot);
  const input = await shadowRoot.evaluateHandle(
    (root, selector) => root.querySelector(selector),
    inputSelector
  );
  await input.evaluate(el => el.value = '');
  await input.evaluate(el => el.focus());
  await page.keyboard.type(value);
}