import{ test} from '@playwright/test'
test.describe('Verify broken link:',()=>{
    test('broken',async({page})=>{
        await page.goto('https://practice.expandtesting.com/');
        const links = await page.$$eval('a', anchors => anchors.map(anchor => anchor.href));
        // console.log(`Found ${links.length} links.`);

        // Function to check the status of a link
        const checkLink = async (url: string) => {
            try {
                const response = await page.request.get(url, { failOnStatusCode: false });
                return { url, status: response.status() };
            } catch (error) {
                return { url, status: 'Failed to fetch' };
            }
        };
        // Check each link and categorize as valid or broken
        const results = await Promise.all(links.map(link => checkLink(link)));
    
        console.log('Valid Links:');
        results.filter(result => result.status >= '200' && result.status < '400')
               .forEach(result => console.log(result.url));
    
        console.log('Broken Links:');
        results.filter(result => result.status >= '400' || result.status === 'Failed to fetch')
               .forEach(result => console.log(`${result.url} (Status: ${result.status})`));
    })
})

