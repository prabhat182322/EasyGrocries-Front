import { Component, OnInit } from '@angular/core';
import { GroceryService } from '../../services/grocery.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grocery',
  imports: [FormsModule, CommonModule],
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.css'
})
export class GroceryComponent implements OnInit {
 grocery:any;
 groceries: any[] = [];
  basket: any[] = [];
  shippingInfo = {
    name: '',
    address: ''
  };
  isLoyaltySelected = false;
  orderResult: any;

 constructor(private groceryService:GroceryService){

 }

 ngOnInit(){
  this.groceryService.getGrocery().subscribe((data:any) =>{
    this.grocery = data;
  })
 }

 addToBasket(item: any) {
  const existing = this.basket.find(b => b.groceryItemId === item.id);
  if (existing) {
    existing.quantity++;
  } else {
    this.basket.push({ groceryItemId: item.id, quantity: 1 });
  }
}

 placeOrder() {
  const orderPayload = {
    basketItems: this.basket,
    isLoyaltySelected: this.isLoyaltySelected,
    shippingInfo: this.shippingInfo
  };

  this.groceryService.placeOrder(orderPayload).subscribe(result => {
    this.orderResult = result;
    this.basket = []; // Clear basket after order
  });
 }
}
 

