import { Movie } from "../models/movie";


interface Movie {
    year: number;
    title: string;
    studios: string;
    producers: string;
    winner?: string;
}
interface PrizeRange {
    producer: string;
    interval: number;
    previousWin: number;
    followingWin: number;
}

interface RangeResult {
    min: PrizeRange[];
    max: PrizeRange[];
}

export class MovieService {

    static async getAllMovies(): Promise<any> {
        return await Movie.findAll();
    };



    static async getProducersWithWinIntervals(): Promise<RangeResult> {
        const winningMovies = await this.getWinnerMovies();
        const producerWins = this.extractProducerWins(winningMovies);
        const intervals = this.calculateIntervals(producerWins);
        return this.findMinMaxIntervals(intervals);
    }

    static async getWinnerMovies(): Promise<any> {
        return await Movie.findAll({
            where: {
                winner: "yes"
            }
        });
    };

    static extractProducerWins(movies: Movie[]): Record<string, number[]> {
        const result: Record<string, number[]> = {};

        for (const { producers, year } of movies) {
            const producerList = producers.split(/,\s*| and /i).map(p => p.trim());

            for (const producer of producerList) {
                if (!result[producer]) {
                    result[producer] = [];
                }
                result[producer].push(year);
            }
        }
        return result;
    }

    static calculateIntervals(producerWins: Record<string, number[]>): PrizeRange[] {
        const intervals: PrizeRange[] = [];

        for (const [producer, years] of Object.entries(producerWins)) {
            const sortedYears = [...years].sort((a, b) => a - b);

            for (let i = 1; i < sortedYears.length; i++) {
                const previousWin = sortedYears[i - 1];
                const followingWin = sortedYears[i];

                intervals.push({
                    producer,
                    interval: followingWin - previousWin,
                    previousWin,
                    followingWin,
                });
            }
        }

        return intervals;
    }



    static findMinMaxIntervals(intervals: PrizeRange[]): RangeResult {
        if (intervals.length === 0) return { min: [], max: [] };

        let minValue = intervals[0].interval;
        let maxValue = intervals[0].interval;

        const min: PrizeRange[] = [intervals[0]];
        const max: PrizeRange[] = [intervals[0]];

        for (let i = 1; i < intervals.length; i++) {
            const item = intervals[i];
            const value = item.interval;

            if (value < minValue) {
                minValue = value;
                min.length = 0;
                min.push(item);
            } else if (value === minValue) {
                min.push(item);
            }

            if (value > maxValue) {
                maxValue = value;
                max.length = 0;
                max.push(item);
            } else if (value === maxValue) {
                max.push(item);
            }
        }

        return { min, max };
    }




}