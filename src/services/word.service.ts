import * as wordRepository from '../repositories/word.repository';
import { IWord } from '../models/word.model';

export const createWord = async (data: Partial<IWord>) => {
    return await wordRepository.createWord(data);
};
