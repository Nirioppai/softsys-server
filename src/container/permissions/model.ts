import mongoose, { Schema } from 'mongoose';
import IPermission from './_interface';

const PermissionSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<IPermission>('Permission', PermissionSchema);
