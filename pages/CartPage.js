export class CartPage {
  constructor(page) {
    this.page = page;
  }

  async proceedToCheckout() {
    await this.page.waitForSelector('#termsofservice');
    await this.page.check('#termsofservice');
    await this.page.click('#checkout');
  }
}
