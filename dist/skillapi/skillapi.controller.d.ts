import { SkillApiService } from './skillapi.service';
import { skillApi } from 'src/interface/skillapi.interface';
export declare class SkillapiController {
    private readonly skillapiService;
    constructor(skillapiService: SkillApiService);
    findOne(id: any): Promise<skillApi>;
}
