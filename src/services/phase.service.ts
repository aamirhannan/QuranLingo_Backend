import * as phaseRepository from '../repositories/phase.repository';
import { IPhase } from '../models/phase.model';

export const createPhase = async (data: Partial<IPhase>) => {
    return await phaseRepository.createPhase(data);
};
