import { test, expect } from '@playwright/test';
import { Actor } from '../actors/Actor.js';
import { LoginTask } from '../tasks/LoginTask.js';
import { IsDashboardVisible } from '../questions/IsDashboardVisible.js';

test('El usuario puede iniciar sesión y ver el panel', async ({ page }) => {
  const usuario = new Actor('Usuario', page);
  await page.goto('https://qastaging.siigo.com/');
  await usuario.attemptsTo(LoginTask.withCredentials('retoautomationsiigo@yopmail.com', 'T4b4ck0ff1c3P455w0rd658*'));
  const estaEnElDashboard = await IsDashboardVisible.isVisible().answeredBy(usuario);
  expect(estaEnElDashboard).toBe(true);
});