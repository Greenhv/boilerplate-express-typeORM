import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  BaseEntity
} from "typeorm";
import { Category } from "./Category";

@Entity()
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id = undefined;

  @Column("varchar")
  title = "";

  @Column("text")
  text = "";

  @ManyToMany(type => Category, { cascade: true, lazy: true })
  @JoinTable()
  categories = undefined;
}
