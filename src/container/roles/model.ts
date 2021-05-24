import mongoose, { Schema } from 'mongoose';
import IRole from './_interface';

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
