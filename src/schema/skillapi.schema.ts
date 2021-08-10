import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
class skillApi {
  
  @Prop()
  skill_name: string;

  @Prop()
  skill_description: string;

  @Prop()
  projected_growth : string;

  @Prop()
  demand : string;

  @Prop()
  associated_salary_range : string;

  @Prop()
  courses : string;
  
}

export type skillApiDocument = skillApi & Document;
export const skillApiSchema = SchemaFactory.createForClass(skillApi);

