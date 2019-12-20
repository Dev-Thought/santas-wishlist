import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Wish } from '@wishlist/api-interfaces';
import { timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

const UPDATE_INTERVAL_IN_MS = 5000 * 100;

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  constructor(private httpClient: HttpClient) {}

  getWishlist() {
    return timer(0, UPDATE_INTERVAL_IN_MS).pipe(
      switchMap(() => this.httpClient.get<Wish[]>('/api/wishlist'))
    );
  }

  addToList(wish: string) {
    return this.httpClient.post<Wish>('/api/wishlist', { wish });
  }
}
