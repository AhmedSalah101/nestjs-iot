import { Injectable } from '@nestjs/common';
import { Payload, Subscribe } from './mqtt/nest-mqtt-master/src/mqtt.decorator';
import { WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  allowEIO3: true,
})
export class AppService {
  @WebSocketServer()
  server: Server;

  constructor() {
    console.log('created');
  }
  @Subscribe('esp32/test')
  test(@Payload() payload) {
    console.log(payload);
    this.server.emit('message', payload);
  }
}
