import { Phase, IPhase } from '../models/phase.model';

export const createPhase = async (data: Partial<IPhase>): Promise<IPhase> => {
    return await Phase.create(data);
};

export const getAllPhases = async (): Promise<IPhase[]> => {
    return await Phase.find().sort({ createdAt: 1 });
};
