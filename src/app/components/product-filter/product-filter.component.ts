import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';

@Component({
  selector: 'app-product-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.css'
})
export class ProductFilterComponent implements OnInit {
  category$ = new BehaviorSubject<string>('All');
  price$ = new BehaviorSubject<string>('All');
  search$ = new BehaviorSubject<string>('');

  products = [
    {
      id: 1,
      name: 'Dell Laptop',
      category: 'Electronics',
      price: 45000
    },
    {
      id: 2,
      name: 'iPhone',
      category: 'Electronics',
      price: 80000
    },
    {
      id: 3,
      name: 'Office Chair',
      category: 'Furniture',
      price: 7000
    },
    {
      id: 4,
      name: 'HP Laptop',
      category: 'Electronics',
      price: 55000
    }
  ];

  filteredProducts = [...this.products];

  ngOnInit(): void {
    combineLatest([
  this.category$,
  this.price$,
  this.search$
]).subscribe(([category, price, search]) => {

  this.filteredProducts = this.products.filter(product => {

    const matchCategory =
      category === 'All' || product.category === category;

    const matchPrice =
      price === 'All' ||
      (price === 'Under 50000' && product.price < 50000) ||
      (price === 'Above 50000' && product.price >= 50000);

    const matchSearch =
      product.name.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchPrice && matchSearch;

  });

});
  }

  onCategoryChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.category$.next(value);
  }

  onPriceChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.price$.next(value);
  }

  onSearchChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.search$.next(value);
  }
}
