import { Module } from '@nestjs/common';
import { SpendsControllersController } from './spends-controllers/spends-controllers.controller';
import { SpendsServicesService } from './spends-services/spends-services.service';

@Module({
  controllers: [SpendsControllersController],
  providers: [SpendsServicesService]
})
export class SpendsModule {}
