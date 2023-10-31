import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig';
@Module({
  imports: [
    ClientsModule.register([
      {
        name:'AUTH_SERVICE',
        transport:Transport.KAFKA,
        options:{
          client:{
            clientId:'auth',
            brokers:['kafka-2:9092'],
          },
          consumer:{
            groupId:'auth-consumer',
          }
        }
      }
    ]),
    TypeOrmModule.forRoot(config)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
