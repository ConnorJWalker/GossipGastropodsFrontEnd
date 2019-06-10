export class User {
  public token: string;
  public firstName: string;
  public lastName: string;
  public fullName: string;
  public profilePicture: string;
  public emailVerified: boolean;

  constructor() {
    const user = JSON.parse(localStorage.getItem('userData'));
    this.token = user.token;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.fullName = `${this.firstName} ${this.lastName}`;
    this.profilePicture = user.profilePicture;
    this.emailVerified = user.emailVerified;
  }

  public static saveToken(token: string): void {
    const base64 = token.split('.')[1].replace('-', '+').replace('_', '/');
    const decoded = { ...JSON.parse(window.atob(base64)), token };

    localStorage.setItem('userData', JSON.stringify(decoded));
  }
}
