import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@wishlist/api-interfaces';
import { WishlistService } from './wishlist.service';

@Component({
  selector: 'wishlist-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  wishList$ = this.wishlistService.getWishlist();

  constructor(private wishlistService: WishlistService) {}

  sendWish(wish: string) {
    this.wishlistService.addToList(wish).subscribe();
  }
}
