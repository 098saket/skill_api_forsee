import { Injectable } from '@nestjs/common';
import { skillApi } from 'src/interface/skillapi.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { skillApiDocument } from 'src/schema/skillapi.schema';

@Injectable()
export class SkillApiService {
    constructor(@InjectModel('skillApi') private readonly skillModel:Model<skillApiDocument>) {}
   
    async findOne(skill_name: string): Promise<skillApi> {
        return await this.skillModel.findOne({ _skill_name : skill_name  });
    }


  }
