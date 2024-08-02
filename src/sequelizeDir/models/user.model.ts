import {
  AllowNull,
  AutoIncrement,
  Column,
  CreatedAt,
  DeletedAt,
  Model,
  PrimaryKey,
  Table,
  Unique,
  UpdatedAt,
} from "sequelize-typescript";
import { userCreationAtt, UserInterface } from "./types/user.types";
import { DataTypes } from "sequelize";

@Table({
  paranoid: true,
  timestamps: true,
  tableName: "users",
})
export default class Users extends Model<UserInterface, userCreationAtt> {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column(DataTypes.INTEGER)
  id!: number;

  @Column
  name!: string;

  @Unique
  @Column
  email!: string;

  @Column
  password!: string;

  @CreatedAt
  created_at!: Date;

  @UpdatedAt
  updated_at!: Date;

  @DeletedAt
  deleted_at!: Date;
}
