// global-teardown.ts
import { request } from '@playwright/test';

async function globalTeardown() {
    // Hypothetical: If you started any external service or used
    // a service that needs to be closed or data removed.

    // For a real app, you might do:
    // const context = await request.newContext();
    // await context.delete('https://api.example.com/test-data/cleanup');
    // or any other cleanup steps required.

    console.log('Global Teardown: All tests finished. Cleaned up resources.');
}

export default globalTeardown;
