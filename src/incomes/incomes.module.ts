import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
//Incomes Components
import { IncomesControllersController } from './incomes-controllers/incomes-controllers.controller';
import { IncomesModel } from './incomes-model/incomes-model';
//Services
import { IncomesServicesService } from './incomes-services/incomes-services.service';

@Module({
  imports: [SequelizeModule.forFeature([IncomesModel])],
  controllers: [IncomesControllersController],
  providers: [IncomesServicesService],
})
export class IncomesModule {}
