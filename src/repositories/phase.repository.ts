import { Phase, IPhase } from '../models/phase.model';

export const createPhase = async (data: Partial<IPhase>): Promise<IPhase> => {
    return await Phase.create(data);
};
