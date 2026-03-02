export class RegisterPage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.click('text=Register');
  }

  async registerUser(user) {
    await this.page.check('#gender-male');
    await this.page.fill('#FirstName', user.firstName);
    await this.page.fill('#LastName', user.lastName);
    await this.page.fill('#Email', user.email);
    await this.page.fill('#Password', user.password);
    await this.page.fill('#ConfirmPassword', user.password);
    await this.page.click('#register-button');
  }

  async verifyRegistrationSuccess() {
    await this.page.getByRole('heading', { name: 'Register' });
    await this.page.locator('.result')
      .waitFor();
  }
}