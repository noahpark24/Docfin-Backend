import { Module } from '@nestjs/common';
//App Components
import { AppController } from './app.controller';
import { AppService } from './app.service';
//Modules
import { PeriodizatedMovementModule } from './periodizated-movement/periodizated-movement.module';
import { IncomesModule } from './incomes/incomes.module';
import { SpendsModule } from './spends/spends.module';
//Config
import { DbConectionConfig } from './config/db.connection.config';
import { config } from 'dotenv';
config();

@Module({
  imports: [
    IncomesModule,
    SpendsModule,
    PeriodizatedMovementModule,
    DbConectionConfig,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
