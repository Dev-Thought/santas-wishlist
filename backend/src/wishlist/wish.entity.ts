import {
  EntityRowKey,
  EntityPartitionKey,
  EntityString,
} from '@nestjs/azure-database';

@EntityRowKey('WishId')
@EntityPartitionKey('Wish')
export class WishEntity {
  @EntityString()
  name: string;
  @EntityString()
  wish: string;
}
