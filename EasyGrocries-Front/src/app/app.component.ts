import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GroceryComponent } from './components/grocery/grocery.component';

@Component({
  selector: 'app-root',
  imports: [SidebarComponent, GroceryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  

  }



