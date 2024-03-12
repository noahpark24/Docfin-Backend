import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
//Spends Components
import { SpendsControllersController } from './spends-controllers/spends-controllers.controller';
import { SpendsModel } from './spends-model/spends-model';
//Services
import { SpendsServicesService } from './spends-services/spends-services.service';

@Module({
  imports: [SequelizeModule.forFeature([SpendsModel])],
  controllers: [SpendsControllersController],
  providers: [SpendsServicesService],
})
export class SpendsModule {}
