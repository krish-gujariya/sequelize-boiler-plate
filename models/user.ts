import { Optional } from "sequelize";
import {
  Table,
  Column,
  Model,
  DataType,
  NotNull,
  PrimaryKey,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  AutoIncrement,
} from "sequelize-typescript";

interface IUserAttribute {
  id: number;
  name: string;
  email: string;
  password: string;
  dob: Date;
  createdAt: Date;
  updateAt: Date;
  deletedAt: Date;
}

interface IUSerClass extends Optional<IUserAttribute, "id"> {}

@Table
export class Users extends Model<IUserAttribute, IUSerClass> {
  @Column(DataType.INTEGER)
  @NotNull
  @PrimaryKey
  @AutoIncrement
  declare id: number;

  @Column(DataType.TEXT)
  @NotNull
  declare name: string;

  @Column(DataType.TEXT)
  @NotNull
  declare email: string;

  @Column(DataType.TEXT)
  @NotNull
  declare password: string;

  @Column(DataType.TEXT)
  @NotNull
  declare dob: string;

  @CreatedAt
  declare createdAt: Date;

  @UpdatedAt
  declare updatedAt: Date;

  @DeletedAt
  declare deletedAt: Date;
}
