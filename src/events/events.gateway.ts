import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';

import { CreateEventDto } from './dto/create-event.dto';
import { Inject } from '@nestjs/common/decorators/core/inject.decorator';
import { MqttService } from 'src/mqtt/nest-mqtt-master/src/mqtt.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  allowEIO3: true,
})
export class EventsGateway {
  constructor(
    @Inject(MqttService) private readonly mqttService: MqttService,
  ) {}

  @SubscribeMessage('message')
  async turnOn(@MessageBody() createEventDto: CreateEventDto) {
    console.log(createEventDto);
    await this.mqttService.publish('esp32/output', createEventDto);
  }
}
