import { Column, Model, Table, DataType } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';

@Table({
  tableName: 'movements',
})
export class MovementsModel extends Model {
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
    type: DataType.INTEGER,
    allowNull: false,
  })
  amount: number;

  @Column({
    type: DataType.STRING,
    validate: {
      isIn: [['Ingreso', 'Gasto']],
    },
    defaultValue: 'Gasto',
    allowNull: false,
  })
  operationType: string;

  @Column({
    type: DataType.STRING,
    validate: {
      isIn: [['Factura', 'Salario', 'Suscripcion', 'Otro']],
    },
    defaultValue: 'Otro',
    allowNull: false,
  })
  category: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  date: string;
}
