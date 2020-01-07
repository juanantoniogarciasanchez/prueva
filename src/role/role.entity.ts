import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinColumn,
  Entity,
} from 'typeorm';
import { type } from 'os';
import { Usuarios } from '../usuarios/usuarios.entity';
@Entity()
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 20, nullable: false })
  Nombre: string;

  @Column({ type: 'text', nullable: false })
  descripcion: string;

  @ManyToMany(
    type => Usuarios,
    usuarios => usuarios.roles,
  )
  @JoinColumn()
  usuarios: Usuarios[];

  @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
  status: string;
}
