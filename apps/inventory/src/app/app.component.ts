import { Component } from '@angular/core';
import {ProductListComponent} from "@angular-monorepo/products";

@Component({
  standalone: true,
  imports: [ProductListComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'inventory';
}
