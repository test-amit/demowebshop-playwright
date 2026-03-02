export class CheckoutPage {
  constructor(page) {
    this.page = page;
  }

  async completeCheckoutFlow() {

    // Step 1: Billing Address
    await this.page.waitForSelector('#billing-buttons-container input[value="Continue"]');
    await this.page.click('#billing-buttons-container input[value="Continue"]');

    // Step 2: Shipping Address
    await this.page.waitForSelector('#shipping-buttons-container input[value="Continue"]');
    await this.page.click('#shipping-buttons-container input[value="Continue"]');

    // Step 3: Shipping Method
    await this.page.waitForSelector('#shipping-method-buttons-container input[value="Continue"]');
    await this.page.click('#shipping-method-buttons-container input[value="Continue"]');

    // Step 4: Payment Method
    await this.page.waitForSelector('#payment-method-buttons-container input[value="Continue"]');
    await this.page.click('#payment-method-buttons-container input[value="Continue"]');

    // Step 5: Payment Information
    await this.page.waitForSelector('#payment-info-buttons-container input[value="Continue"]');
    await this.page.click('#payment-info-buttons-container input[value="Continue"]');

    // Step 6: Confirm Order
    await this.page.waitForSelector('#confirm-order-buttons-container input[value="Confirm"]');
    await this.page.click('#confirm-order-buttons-container input[value="Confirm"]');
  }
}