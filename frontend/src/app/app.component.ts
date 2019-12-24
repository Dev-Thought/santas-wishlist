import { Component } from "@angular/core";
import { WishlistService } from "./wishlist.service";
import { first } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  wishList$ = this.wishlistService.getWishlist();

  constructor(private wishlistService: WishlistService) {}

  sendWish(wish: string, name: string) {
    this.wishlistService
      .addToList(wish, name)
      .pipe(first())
      .subscribe();
  }
}
