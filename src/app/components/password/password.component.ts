import { Component } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent {
  public passwordStrengthPercent = 0;
  private currentPassword = '';

  public set password(value: string) {
    this.currentPassword = value;
    this.updatePasswordStrength(value);
  }

  public get password(): string {
    return this.currentPassword;
  }

  public get is8Characters(): boolean {
    return this.currentPassword.length >= 8;
  }

  public get hasOneCapitalLetter(): boolean {
    return /(.*[A-Z].*)/.test(this.currentPassword);
  }

  public get hasOneNumber(): boolean {
    return /(.*\d.*)/.test(this.currentPassword);
  }

  public get hasOneSpecialCharacter(): boolean {
    return /\W|_/.test(this.currentPassword);
  }

  private updatePasswordStrength(value: string) {
    let passwordStrength = 0;
    if (this.is8Characters) passwordStrength += 25;
    if (this.hasOneCapitalLetter) passwordStrength += 25;
    if (this.hasOneNumber) passwordStrength += 25;
    if (this.hasOneSpecialCharacter) passwordStrength += 25;
    this.passwordStrengthPercent = passwordStrength;
  }
}
