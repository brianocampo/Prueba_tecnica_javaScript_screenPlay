/**
 * Mapa de selectores de la vista de Dashboard principal.
 * 
 * Este objeto contiene los elementos clave con los que un actor puede interactuar
 * dentro del dashboard general de la aplicación, como el botón para crear nuevos registros
 * y la navegación hacia el módulo de clientes.
 * 
 * Se utiliza en tareas (Tasks) o verificaciones (Questions) siguiendo el patrón Screenplay.
 */
export const DashboardPage = {
  /**
   * Botón "Crear".
   * Permite iniciar la creación de un nuevo cliente o entidad.
   * Selector con filtro `:has(span:text("Crear"))` para asegurar coincidencia textual del hijo.
   */
  crearButton: 'button.btn-element:has(span:text("Crear"))',

  /**
   * Enlace al módulo de Clientes.
   * Presente en la barra lateral o menú de navegación.
   */
  clientesLink: 'a[data-value="Clientes"]',
};
