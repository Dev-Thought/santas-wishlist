import {
  EntityPartitionKey,
  EntityRowKey,
  EntityString
} from '@nestjs/azure-database';

@EntityPartitionKey('WishID')
@EntityRowKey('Wish')
export class WishEntity {
  @EntityString() wish: string;
}
