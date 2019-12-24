import { Injectable } from '@nestjs/common';
import { Wish } from './wish.model';
import { InjectRepository, Repository } from '@nestjs/azure-database';
import { WishEntity } from './wish.entity';

@Injectable()
export class WishlistService {
  constructor(
    @InjectRepository(WishEntity)
    private readonly wishRepository: Repository<WishEntity>,
  ) {}

  async addWish(wish: string, name: string): Promise<Wish> {
    const entity = new WishEntity();
    entity.name = name;
    entity.wish = wish;

    const wishEntry = await this.wishRepository.create(entity);
    return {
      id: wishEntry['RowKey'],
      name: wishEntry.name,
      wish: wishEntry.wish,
    };
  }
  async wishlist(): Promise<Wish[]> {
    return (await this.wishRepository.findAll()).entries.map(wishEntry => ({
      id: wishEntry['RowKey'],
      name: wishEntry.name,
      wish: wishEntry.wish,
    }));
  }
}
