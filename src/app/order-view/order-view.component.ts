import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { DairyProduct } from '../models/dairy-product';
import { DairyProductService } from '../services/dairy-product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrderService } from '../services/order.service';
import { Order } from '../models/order';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {
  product: DairyProduct = {
    id:  0,
    name: '',
    description: '',
    category: '',
    imageUrl: '',
    price: 0
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private dairyProductService: DairyProductService,
    private orderService: OrderService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.getProduct();
  }
  
  getProduct() {
  const id = this.route.snapshot.paramMap.get('id');

  if (id) {
    this.dairyProductService.getDairyProduct(+id).subscribe({
      next: (product) => {
        this.product = product;
      },
      error: (error) => {
        console.error('Error fetching dairy product:', error);
        this._snackBar.open('Error fetching dairy product. Please try again later.', 'Close', {
          duration: 3000,
          panelClass: ['mat-toolbar', 'mat-warn']
        });
        this.router.navigate(['/']);
      }
    });
  }
  }


  orderForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.pattern(/^\S+@\S+\.\S+$/)]],
    phone: ['', [Validators.required, Validators.pattern('^[789][0-9]{9}$')]],
    quantity: [1, [Validators.required, Validators.min(1)]],
    address: this.formBuilder.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', [Validators.required, Validators.pattern(/^[0-9]{5,6}$/)]]
    })
  });

  get name() {
    return this.orderForm.get('name');
  }
  get street() {
    return this.orderForm.get('street');
  }
  get city() {
    return this.orderForm.get('city');
  }
  get state() {
    return this.orderForm.get('state');
  }
  get zipCode() {
    return this.orderForm.get('zipCode');
  }

  placeOrder() {
    if (this.orderForm.valid && this.product) {
      const orderData: Order = {
        ...this.orderForm.value,
        product: this.product
      };

      this.orderService.addOrder(orderData).subscribe({
        next: order => {
          this._snackBar.open('Order placed successfully!', 'Close',
          { duration: 3000, panelClass: ['mat-toolbar', 'mat-primary'] }
          );
          this.orderForm.reset(this.orderForm.value);
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('Error ordering:', error);
          this._snackBar.open('Error placing order.', 'Close', {
            duration: 3000,
            panelClass: ['mat-toolbar', 'mat-warn']
          });
          this.router.navigate(['/']);
        }
      })
    }
  }

  canDeactivate() {
    if (this.orderForm.dirty) {
      return confirm('You have unsaved changes. Are you sure you want to leave?');
    }
    return true;
  }

  goBack() {
    this.router.navigate(['/']);
  }
}