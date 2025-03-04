import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('placas')
export class Placa {

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({type:'varchar',unique:true,length:10})
    placa:string;

    @Column({type:'varchar',length:50})
    marca:string;

    @Column({type:'int'}) 
    modelo: number;

    @Column({type:'varchar',length:30})
    color:string;

    @Column({type:'timestamp',
        default:()=>'CURRENT_TIMESTAMP' })
    fecha_ingreso: Date;
}