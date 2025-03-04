"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Placa = void 0;
const typeorm_1 = require("typeorm");
let Placa = class Placa {
    id;
    placa;
    marca;
    modelo;
    color;
    fecha_ingreso;
};
exports.Placa = Placa;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Placa.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', unique: true, length: 10 }),
    __metadata("design:type", String)
], Placa.prototype, "placa", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], Placa.prototype, "marca", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Placa.prototype, "modelo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 30 }),
    __metadata("design:type", String)
], Placa.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Placa.prototype, "fecha_ingreso", void 0);
exports.Placa = Placa = __decorate([
    (0, typeorm_1.Entity)('placas')
], Placa);
//# sourceMappingURL=placa.entity.js.map