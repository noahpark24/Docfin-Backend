import { Module } from '@nestjs/common';
import { MovementControllersController } from './movement-controllers/movement-controllers.controller';
import { MovementServicesService } from './movement-services/movement-services.service';

@Module({
  controllers: [MovementControllersController],
  providers: [MovementServicesService]
})
export class PeriodizatedMovementModule {}
