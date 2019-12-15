import { Injectable } from '@nestjs/common';
import { Wish } from './wish.model';
import { InjectRepository, Repository } from '@nestjs/azure-database';
import { WishEntity } from './wish.entity';

@Injectable()
export class WishlistService {
  constructor(
    @InjectRepository(WishEntity)
    private readonly wishRepository: Repository<WishEntity>
  ) {}

  async sendAwish(wish: string): Promise<Wish> {
    const myWish = new WishEntity();
    myWish.wish = wish;
    const newWish = await this.wishRepository.create(myWish);
    return {
      wish: newWish.wish,
      id: newWish['RowKey']
    };
  }

  async getList(): Promise<Wish[]> {
    const allWishes = await this.wishRepository.findAll();
    return allWishes.entries.map(wish => {
      return {
        wish: wish.wish,
        id: wish['RowKey']
      };
    });
  }
}
