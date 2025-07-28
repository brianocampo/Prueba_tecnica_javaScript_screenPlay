import { test, expect } from '@playwright/test';
import { Actor } from '../actors/Actor.js';
import { LoginTask } from '../tasks/LoginTask.js';
import { CrearClienteTask } from '../tasks/CrearClienteTask.js';
import { IsEditarTerceroVisible } from '../questions/IsEditarTerceroVisible.js';

test('El usuario puede crear cliente tercero', async ({ page }) => {
  const usuario = new Actor('Usuario', page);
  await page.goto('https://qastaging.siigo.com/');
  await usuario.attemptsTo(LoginTask.withCredentials('retoautomationsiigo@yopmail.com', 'T4b4ck0ff1c3P455w0rd658*'));
  await usuario.attemptsTo(CrearClienteTask.createNewClient());
  const estaVisible = await IsEditarTerceroVisible.isVisible().answeredBy(usuario);
  expect(estaVisible).toBe(true);
});