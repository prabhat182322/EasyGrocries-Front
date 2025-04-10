import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {
  private apiUrl = "https://localhost:7114/api/";
  constructor(private http:HttpClient){
    
  }

  getGrocery(): Observable<any>{
   const  url = "";
    return this.http.get<any>(this.apiUrl + "Grocery");
  }

  placeOrder(order: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "Order", order);
  }
}
