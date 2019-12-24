import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Wish } from "../../../backend/src/wishlist/wish.model";
import { timer } from "rxjs";
import { switchMap } from "rxjs/operators";
import { environment } from "../environments/environment";

const UPDATE_INTERVAL_IN_MS = 1000;

@Injectable({
  providedIn: "root"
})
export class WishlistService {
  constructor(private httpClient: HttpClient) {}

  getWishlist() {
    return timer(0, UPDATE_INTERVAL_IN_MS).pipe(
      switchMap(() =>
        this.httpClient.get<Wish[]>(environment.backendEndpoint + "wishlist")
      )
    );
  }

  addToList(wish: string, name: string) {
    return this.httpClient.post<Wish>(
      environment.backendEndpoint + "wishlist",
      { wish, name }
    );
  }
}

