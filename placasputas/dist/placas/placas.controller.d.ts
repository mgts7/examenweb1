import { PlacasService } from './placas.service';
import { CreatePlacaDto } from './dto/create-placa.dto';
export declare class PlacasController {
    private readonly placasService;
    constructor(placasService: PlacasService);
    create(createPlacaDto: CreatePlacaDto): Promise<import("./entities/placa.entity").Placa>;
    findAll(): Promise<import("./entities/placa.entity").Placa[]>;
    findOne(id: string): Promise<import("./entities/placa.entity").Placa | null>;
    remove(id: string): Promise<string>;
}
