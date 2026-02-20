import * as phaseRepository from '../repositories/phase.repository';
import * as chapterRepository from '../repositories/chapter.repository';
import * as wordRepository from '../repositories/word.repository';

/**
 * Get the full curriculum overview — all phases with their chapters (no words).
 * Used for the level-select / navigation screen.
 */
export const getCurriculumOverview = async () => {
    const phases = await phaseRepository.getAllPhases();

    const curriculum = await Promise.all(
        phases.map(async (phase) => {
            const chapters = await chapterRepository.getChaptersByPhaseId(phase.phaseId);

            const chaptersWithCount = await Promise.all(
                chapters.map(async (chapter) => {
                    const wordCount = await wordRepository.getWordCountByChapterId(chapter.chapterId);
                    return {
                        chapterId: chapter.chapterId,
                        name: chapter.name,
                        description: chapter.description,
                        wordCount,
                    };
                })
            );

            return {
                phaseId: phase.phaseId,
                name: phase.name,
                description: phase.description,
                chapters: chaptersWithCount,
            };
        })
    );

    return curriculum;
};

/**
 * Get a specific chapter with all its words.
 * Used when a user opens a chapter to study.
 */
export const getChapterWords = async (phaseId: string, chapterId: string) => {
    // Validate the chapter exists and belongs to the given phase
    const chapter = await chapterRepository.getChapterById(chapterId);
    if (!chapter) {
        throw new Error('Chapter not found');
    }

    if (chapter.phaseId !== phaseId) {
        throw new Error('Chapter does not belong to this phase');
    }

    const words = await wordRepository.getWordsByChapterId(chapterId);

    return {
        phaseId: chapter.phaseId,
        chapterId: chapter.chapterId,
        name: chapter.name,
        description: chapter.description,
        words,
    };
};
