import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UsuariosDetails {
  @PrimaryGeneratedColumn('increment')
  Id_usuario: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  Nombre: string;

  @Column({ type: 'varchar', nullable: false })
  Apellidos: string;

  @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
  status: string;
}
