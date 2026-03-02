export class LoginPage {
  constructor(page) {
    this.page = page;
    this.email = '#Email';
    this.password = '#Password';
    this.loginBtn = 'input[value="Log in"]';
    this.accountEmail = '.account';
  }

  async navigate() {
    await this.page.click('text=Log in');
  }

  async login(email, password) {
    await this.page.fill(this.email, email || '');
    await this.page.fill(this.password, password || '');
    await this.page.click(this.loginBtn);
  }
}
