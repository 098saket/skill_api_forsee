import { Document } from 'mongoose';
declare class skillApi {
    skill_name: string;
    skill_description: string;
    projected_growth: string;
    demand: string;
    associated_salary_range: string;
    courses: string;
}
export declare type skillApiDocument = skillApi & Document;
export declare const skillApiSchema: import("mongoose").Schema<Document<skillApi, any, any>, import("mongoose").Model<any, any, any>, undefined, any>;
export {};
