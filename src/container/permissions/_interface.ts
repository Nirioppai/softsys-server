import { Document } from 'mongoose';

export default interface IPermission extends Document {
    name: String;
    description: String;
}
