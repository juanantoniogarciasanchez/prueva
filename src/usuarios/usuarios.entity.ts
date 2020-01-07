import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinTable,
  JoinColumn,
  ManyToMany,
  BaseEntity,
} from 'typeorm';
import { UsuariosDetails } from './usuarios.details.entity';
import { Role } from '../role/role.entity';

@Entity()
export class Usuarios extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  Id_usuario: number;

  @Column({ type: 'varchar', unique: true, length: 25, nullable: false })
  usuario: string;

  @Column({ type: 'varchar', nullable: false })
  Email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @OneToOne(type => UsuariosDetails, {
    cascade: true,
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'detail_id' })
  details: UsuariosDetails;

  @ManyToMany(
    type => Role,
    role => role.usuarios,
    { eager: true },
  )
  @JoinTable({ name: 'usuariosRoles' })
  roles: Role[];

  @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
  status: string;
}
