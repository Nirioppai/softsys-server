import { Document } from 'mongoose';

export default interface ITraining extends Document {
    name: String;
    description: String;
}
