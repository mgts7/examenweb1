"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlacasModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const placas_service_1 = require("./placas.service");
const placas_controller_1 = require("./placas.controller");
const placa_entity_1 = require("./entities/placa.entity");
let PlacasModule = class PlacasModule {
};
exports.PlacasModule = PlacasModule;
exports.PlacasModule = PlacasModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([placa_entity_1.Placa])],
        controllers: [placas_controller_1.PlacasController],
        providers: [placas_service_1.PlacasService],
        exports: [typeorm_1.TypeOrmModule],
    })
], PlacasModule);
//# sourceMappingURL=placas.module.js.map