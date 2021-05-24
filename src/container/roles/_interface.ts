import { Document } from 'mongoose';

export default interface IRole extends Document {
    name: String;
    description: String;
    permissions: Array<String>;
}
