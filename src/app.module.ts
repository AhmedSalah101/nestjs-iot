import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MqttModule } from './mqtt/nest-mqtt-master/src/mqtt.module';
import { EventsModule } from './events/events.module';

@Module({
  imports: [
    MqttModule.forRoot({
      host: '127.0.0.1',
      port: 1885,
    }),
    EventsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
