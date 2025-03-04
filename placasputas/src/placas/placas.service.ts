import { Injectable } from '@nestjs/common';
import { CreatePlacaDto } from './dto/create-placa.dto';
import { UpdatePlacaDto } from './dto/update-placa.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Placa } from './entities/placa.entity';

@Injectable()
export class PlacasService {
  constructor(
    @InjectRepository(Placa)
    private placaRepository: Repository<Placa>,
  ) {}

  async create(createPlacaDto: CreatePlacaDto) {
    const newPlaca = this.placaRepository.create(createPlacaDto)
    await this.placaRepository.save(newPlaca);
    return newPlaca
  }

   async findAll():Promise<Placa[]>{
    const placas=await this.placaRepository.find();
    return placas;
  }

  async findOne(id: string):Promise<Placa|null>{
    const unaPlaca=await this.placaRepository.findOneBy({id});
    return unaPlaca;
  }

  async remove(id: string):Promise<string>{
    const result=await this.placaRepository.delete(id);
    return "Placa eliminada";}

}
