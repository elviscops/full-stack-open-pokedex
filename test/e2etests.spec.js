const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })
  test('pokemon page can be opened', async ({ page }) => {
    await page.goto('/pokemon/ivysaur')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('speed')).toBeVisible()
    await expect(page.getByText('special defense')).toBeVisible()
    await expect(page.getByText('special attack')).toBeVisible()
    await expect(page.getByRole('cell', { name: 'defense', exact: true })).toBeVisible()
    await expect(page.getByRole('cell', { name: 'attack', exact: true })).toBeVisible()
    await expect(page.getByText('hp')).toBeVisible()
  })
})