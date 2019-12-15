import { Module } from '@nestjs/common';
import { WishlistController } from './wishlist.controller';
import { WishlistService } from './wishlist.service';
import { AzureTableStorageModule } from '@nestjs/azure-database';
import { WishEntity } from './wish.entity';

@Module({
  imports: [
    AzureTableStorageModule.forFeature(WishEntity, {
      table: 'wishes',
      createTableIfNotExists: true
    })
  ],
  controllers: [WishlistController],
  providers: [WishlistService]
})
export class WishlistModule {}
