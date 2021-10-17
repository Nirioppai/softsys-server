import mongoose, { Schema, Document } from 'mongoose';

export interface IRole extends Document {
    name: String;
    description: String;
    permissions: Array<String>;
}

const RoleSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        permissions: [{ type: String }]
    },
    {
        timestamps: true
    }
);

export default mongoose.model<IRole>('Role', RoleSchema);
