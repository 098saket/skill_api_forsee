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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillApiService = void 0;
const common_1 = require("@nestjs/common");
const skillapi_interface_1 = require("../interface/skillapi.interface");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const skillapi_schema_1 = require("../schema/skillapi.schema");
let SkillApiService = class SkillApiService {
    constructor(skillModel) {
        this.skillModel = skillModel;
    }
    async findOne(skill_name) {
        return await this.skillModel.findOne({ _skill_name: skill_name });
    }
};
SkillApiService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('skillApi')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SkillApiService);
exports.SkillApiService = SkillApiService;
//# sourceMappingURL=skillapi.service.js.map