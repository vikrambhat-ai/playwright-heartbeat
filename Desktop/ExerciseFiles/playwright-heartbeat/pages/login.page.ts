import { Page } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  readonly usernameInput = this.page.locator("#username");
  readonly passwordInput = this.page.locator("#password");
  readonly loginButton = this.page.locator("button[type='submit']");

  async goto() {
    await this.page.goto("https://delightful-sand-0e9f70500.2.azurestaticapps.net/login");
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}