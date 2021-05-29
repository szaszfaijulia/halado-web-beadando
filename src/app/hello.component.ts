import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <mat-card>
      <h1>Könyv nyilvántartó</h1>
      <nav>
        <a mat-button routerLink="/books">Könyvek</a> |
        <a mat-button routerLink="/authors">Szerzők</a> |
        <a mat-button routerLink="/bookstores">Könyvesboltok</a>
      </nav>
    </mat-card>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
        text-align: center;
      }
      nav {
        text-align: center;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;
}
