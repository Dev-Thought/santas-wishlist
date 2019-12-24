import { Controller, Post, Get, Body } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { Wish } from './wish.model';

@Controller('wishlist')
export class WishlistController {
  constructor(private wishlistService: WishlistService) {}

  @Post()
  addWish(@Body() wishDTO: { name: string; wish: string }): Promise<Wish> {
    return this.wishlistService.addWish(wishDTO.name, wishDTO.wish);
  }

  @Get()
  async wishlist(): Promise<Wish[]> {
    return this.wishlistService.wishlist();
  }
}
