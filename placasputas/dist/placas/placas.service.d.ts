import { CreatePlacaDto } from './dto/create-placa.dto';
import { Repository } from 'typeorm';
import { Placa } from './entities/placa.entity';
export declare class PlacasService {
    private placaRepository;
    constructor(placaRepository: Repository<Placa>);
    create(createPlacaDto: CreatePlacaDto): Promise<Placa>;
    findAll(): Promise<Placa[]>;
    findOne(id: string): Promise<Placa | null>;
    remove(id: string): Promise<string>;
}
