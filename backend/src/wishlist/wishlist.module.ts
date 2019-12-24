import { Module } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { WishlistController } from './wishlist.controller';
import { AzureTableStorageModule } from '@nestjs/azure-database';
import { WishEntity } from './wish.entity';

@Module({
  providers: [WishlistService],
  controllers: [WishlistController],
  imports: [
    AzureTableStorageModule.forFeature(WishEntity, {
      table: 'santaswishlist',
      createTableIfNotExists: true,
    }),
  ],
})
export class WishlistModule {}
