"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePlacaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_placa_dto_1 = require("./create-placa.dto");
class UpdatePlacaDto extends (0, mapped_types_1.PartialType)(create_placa_dto_1.CreatePlacaDto) {
}
exports.UpdatePlacaDto = UpdatePlacaDto;
//# sourceMappingURL=update-placa.dto.js.map