import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { MqttService } from './mqtt/nest-mqtt-master/src/mqtt.service';

@Controller()
export class AppController {
  constructor(
    @Inject(MqttService) private readonly mqttService: MqttService,
    private readonly appService: AppService,
  ) {
    console.log('created');
    
  }


}
