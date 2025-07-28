/**
 * Mapa de selectores para los elementos de la página de cliente.
 * 
 * Este objeto representa los campos e interacciones disponibles en la interfaz 
 * para crear, editar o visualizar un cliente, y es utilizado por Tasks, 
 * Interactions y Questions dentro del Screenplay Pattern.
 * 
 * Algunos campos utilizan componentes web personalizados con Shadow DOM.
 */
export const CustomerPage = {
  /**
   * Campo de nombres del cliente.
   * Se accede mediante componente personalizado con Shadow DOM.
   * Utiliza el texto visible 'Nombres' como identificador.
   */
  nombreInput: {
    host: 'siigo-textfield-web',
    inner: 'Nombres',
  },

  /**
   * Campo de apellidos del cliente.
   * Componente con Shadow DOM.
   */
  apellidoInput: {
    host: 'siigo-textfield-web',
    inner: 'Apellidos',
  },

  /**
   * Campo de identificación del cliente.
   * Utiliza un componente específico para validación.
   */
  identificacionInput: {
    host: 'siigo-identification-input-web',
    inner: 'Identificación',
  },

  /**
   * Campo de ciudad con funcionalidad de autocompletado.
   * El input se encuentra dentro de un Shadow DOM y requiere selector específico.
   */
  ciudadInput: {
    host: 'siigo-autocomplete-web',
    inner: '#inputAutocompletecity',
  },

  /**
   * Botón para guardar el cliente.
   * Utilizado al finalizar el formulario.
   */
  guardarButton: "//button[contains(text(),' Guardar ')]",

  /**
   * Botón para editar un tercero ya existente.
   * Utilizado para validar que el cliente fue creado o cargado correctamente.
   */
  editarTerceroButton: "//button[contains(text(),'Editar tercero')]"
};
