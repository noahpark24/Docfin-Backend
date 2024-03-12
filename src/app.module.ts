import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IncomesModule } from './incomes/incomes.module';
import { SpendsModule } from './spends/spends.module';
import { IncomesModule } from './incomes/incomes.module';
import { PeriodizatedMovementModule } from './periodizated-movement/periodizated-movement.module';
import { SpendsModule } from './spends/spends.module';

@Module({
  imports: [IncomesModule, SpendsModule, PeriodizatedMovementModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
