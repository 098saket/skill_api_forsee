import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SkillapiController } from './skillapi.controller';
import { SkillApiService } from './skillapi.service'; 
import { skillApiSchema } from 'src/schema/skillapi.schema'; 

@Module({
  imports: [MongooseModule.forFeature([{ name: 'skillApi', schema: skillApiSchema }])],
  controllers: [SkillapiController],
  providers: [SkillApiService],
})
export class skillApiModule {}
