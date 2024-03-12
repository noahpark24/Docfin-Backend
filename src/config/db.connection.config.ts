import { SequelizeModule } from '@nestjs/sequelize';
//Models
import { IncomesModel } from 'src/incomes/incomes-model/incomes-model';
import { SpendsModel } from 'src/spends/spends-model/spends-model';
import { MovementsModel } from 'src/periodizated-movement/movement-model/movement-model';

export const DbConectionConfig = SequelizeModule.forRoot({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  models: [IncomesModel, SpendsModel, MovementsModel],
  autoLoadModels: true,
  synchronize: true,
});
