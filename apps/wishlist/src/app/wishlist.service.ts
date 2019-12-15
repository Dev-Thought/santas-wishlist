import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Wish } from '@wishlist/api-interfaces';
import { interval, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  constructor(private httpClient: HttpClient) {}

  getWishlist() {
    return timer(0, 5000).pipe(
      switchMap(() => this.httpClient.get<Wish[]>('/api/wishlist'))
    );
  }

  addToList(wish: string) {
    return this.httpClient.post<Wish>('/api/wishlist', { wish });
  }
}
