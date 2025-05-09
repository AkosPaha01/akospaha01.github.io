import { test, expect } from '@playwright/test';

test.describe('Test', async() => {
    test('has title', async ({ page }) => {
    await page.goto('/', {
      waitUntil: 'networkidle',
    });
    const title = "Akos Paha"
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(title);
  });

  test('has rboard theme manager v3 card homepage', async ({ page }) => { 
    await page.goto('/', {
      waitUntil: 'networkidle',
    });
    
    await page.waitForSelector('id=one', { state: 'attached' });

    let container = page
      .locator('id=one')
      .locator('> section > article');
    
    expect( await container.count()).toBeGreaterThanOrEqual(1)

  })

  test('has teams section', async ({ page }) => { 
    await page.goto('/projects/rboard-theme-manager', {
      waitUntil: 'networkidle',
    });

    await expect(page.getByRole('heading', { name: 'Akos Paha' }).locator('b')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'DerTyp7214' }).locator('b')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Radek Bledowski' }).locator('b')).toBeVisible();
  })

  test('has download section', async ({page}) => {
    await page.goto('/projects/rboard-theme-manager', {
      waitUntil: 'networkidle',
    });

    await page.waitForSelector('id=rboard-download-section', { state: 'attached' });

    let container = page
      .locator('id=rboard-download-section')
      .locator(' > div > div > div > div > div > div');
    
    expect(await container.count()).toBe(4)

  })
  test('has rboard theme manager v3 card', async ({ page }) => {
    await page.goto('/projects', {
      waitUntil: 'networkidle'
    });

    await page.waitForSelector('id=one', { state: 'attached' });

    let container = page
      .locator('id=one')
      .locator(' > section > div ');
    expect(await container.count()).toBeGreaterThanOrEqual(1);
  });

  test('hastitle project', async ({ page }) => {
    await page.goto('/projects', {
      waitUntil: 'networkidle',
    });
    
    const title_projects = 'Projects | Akos Paha'

    await expect(page).toHaveTitle(title_projects);
  });
  

  test('has title rboard theme manager v3', async ({ page }) => {
    await page.goto('/projects/rboard-theme-manager', {
      waitUntil: 'networkidle',
    });
    
    const title_rmv3 = 'Rboard Theme Manager V3 | Akos Paha'

    await expect(page).toHaveTitle(title_rmv3);
  });

  test('Read RboardV3 JSON Data', async ({ page, request }) => {
    await page.goto('/projects/rboard-theme-manager', {
      waitUntil: 'networkidle',
    });

   const response =  await request.get('../../assets/json/release-output-metadata.json')
   const data = await response.json()

   expect(data.elements[0].versionCode).toBe(395000)
  });
})