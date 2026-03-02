export function generateRandomUser() {
    const timestamp = Date.now();
  
    return {
      firstName: 'Amit',
      lastName: 'Nayak',
      email: `amit${timestamp}@testmail.com`,
      password: 'Password@123'
    };
  }