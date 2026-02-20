import * as chapterRepository from '../repositories/chapter.repository';
import { IChapter } from '../models/chapter.model';

export const createChapter = async (data: Partial<IChapter>) => {
    return await chapterRepository.createChapter(data);
};
