import { Inject, Injectable } from '@nestjs/common';
import { OrderCreatedEvent } from './order_created.event';
import { ClientKafka } from '@nestjs/microservices';
import { GetUserRequest } from './get-user-request.dto';

@Injectable()
export class AppService {
  constructor(@Inject('AUTH_SERVICE') private readonly authClient:ClientKafka){}
  getHello(): string {
    return 'Hello World!';
  }

  handleOrderCreated(orderCreatedEvent:OrderCreatedEvent){
    console.log('................................................................................................')
    console.log(orderCreatedEvent);
    this.authClient
    .send('get_user',new GetUserRequest(orderCreatedEvent.userId),)
    .subscribe((user)=>{
      console.log(user)
      console.log(`Billing user with stripe ID ${user.stripeUserId} a price of $${orderCreatedEvent.price}...`)
    })
  }
}
