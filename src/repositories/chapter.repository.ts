import { Chapter, IChapter } from '../models/chapter.model';

export const createChapter = async (data: Partial<IChapter>): Promise<IChapter> => {
    return await Chapter.create(data);
};

export const getChaptersByPhaseId = async (phaseId: string): Promise<IChapter[]> => {
    return await Chapter.find({ phaseId }).sort({ createdAt: 1 });
};

export const getChapterById = async (chapterId: string): Promise<IChapter | null> => {
    return await Chapter.findOne({ chapterId });
};
