import { Schema, model, Document } from 'mongoose';

export interface IPhase extends Document {
    phaseId: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

const phaseSchema = new Schema<IPhase>({
    phaseId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
}, { timestamps: true });

export const Phase = model<IPhase>('Phase', phaseSchema);
