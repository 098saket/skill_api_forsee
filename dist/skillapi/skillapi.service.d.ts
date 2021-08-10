import { skillApi } from 'src/interface/skillapi.interface';
import { Model } from 'mongoose';
import { skillApiDocument } from 'src/schema/skillapi.schema';
export declare class SkillApiService {
    private readonly skillModel;
    constructor(skillModel: Model<skillApiDocument>);
    findOne(skill_name: string): Promise<skillApi>;
}
