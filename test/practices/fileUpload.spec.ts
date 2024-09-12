import {expect, test} from '@playwright/test';
import path from 'path';
test.describe('File upload',()=>{
    test('verify file is uploaded successfully',async({page})=>{
        await page.goto('https://practice.expandtesting.com/upload');
        // Methood: 01
        const fileChooserPromise= page.waitForEvent('filechooser');
        await page.locator('[id="fileInput"]').click();
       const filechose= await fileChooserPromise;
       await filechose.setFiles(path.join('/Users/nesap/Desktop', 'file.png'));
       await page.locator('[id="fileSubmit"]').click();
       await expect(page.locator('[aria-label="breadcrumb mb-2"]')).toBeVisible();
       // Method: 02

//    await page.goto('https://practice.expandtesting.com/upload');
//   await page.getByTestId('file-input').click();
//   await page.getByTestId('file-input').setInputFiles('/Users/nesap/Desktop/file.png');
//   await page.getByTestId('file-submit').click();
//   await expect(page.getByRole('heading', { name: 'File Uploaded!' })).toBeVisible();
    })
})
