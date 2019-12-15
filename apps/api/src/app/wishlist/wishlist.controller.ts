import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('wishlist')
export class WishlistController {
  @Get()
  getWishlist() {
    return 
  }

  @Post()
  sendAwish() {}
}
