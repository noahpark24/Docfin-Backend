import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
//MovementsComponents
import { MovementControllersController } from './movement-controllers/movement-controllers.controller';
import { MovementsModel } from './movement-model/movement-model';
//Services
import { MovementServicesService } from './movement-services/movement-services.service';

@Module({
  imports: [SequelizeModule.forFeature([MovementsModel])],
  controllers: [MovementControllersController],
  providers: [MovementServicesService],
})
export class PeriodizatedMovementModule {}
