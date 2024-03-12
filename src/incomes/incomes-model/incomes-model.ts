import { Column, Model, Table, DataType } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';

@Table({
  tableName: 'incomes',
})
export class IncomesModel extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: uuidv4,
    primaryKey: true,
    allowNull: false,
    unique: true,
  })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: false,
  })
  name: string;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  amount: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  date: string;

  // @Column({
  //   type: DataType.STRING,
  //   validate: {
  //     isIn: [['PENDING', 'IN_PROGRESS', 'DONE']],
  //   },
  //   defaultValue: 'PENDING',
  // })
  // state: string;
}
