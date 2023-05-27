import { Router } from '@angular/router';
import { ProductService } from "./../product.service";
import { Product } from "./../product-create/product.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-read",
  templateUrl: "./product-read.component.html",
  styleUrls: ["./product-read.component.css"],
})
export class ProductReadComponent implements OnInit {


  products: Product[] = [];
  displayedColumns = ["id", "name", "price", "actions"];

  constructor(private productsService: ProductService) {}

  ngOnInit(): void {
    this.productsService.read().subscribe((products) => {
      this.products = products;
      console.log(products);
    });
  }
  
}
