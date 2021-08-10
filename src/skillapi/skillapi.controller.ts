import { Controller, Get, Post, Param } from '@nestjs/common';
import { SkillApiService } from './skillapi.service';
import { skillApi } from 'src/interface/skillapi.interface';


@Controller('skillapi')
export class SkillapiController {
    constructor(private readonly skillapiService: SkillApiService) {}

    @Get(':skill_name')
    findOne(@Param('id') id): Promise<skillApi> {
        return this.skillapiService.findOne(id);
    }
}