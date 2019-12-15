import { Controller, Get, Post, Body } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { Wish } from '@wishlist/api-interfaces';

@Controller('wishlist')
export class WishlistController {
  constructor(private wishlistService: WishlistService) {}

  @Get()
  getWishlist(): Promise<Wish[]> {
    return this.wishlistService.getList();
  }

  @Post()
  sendAwish(
    @Body('wish')
   wish: string
  ): Promise<Wish> {
    console.log(wish,'my body')
    return this.wishlistService.sendAwish(wish);
  }
}
