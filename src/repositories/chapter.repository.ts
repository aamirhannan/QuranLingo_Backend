import { Chapter, IChapter } from '../models/chapter.model';

export const createChapter = async (data: Partial<IChapter>): Promise<IChapter> => {
    return await Chapter.create(data);
};
