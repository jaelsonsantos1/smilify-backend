import { AppDataSource } from "../data_source";
import { HistoryVoting } from "../entities/HistoryVoting";

export class getAllVotesService {
    async execute() {
        const voteRepository = AppDataSource.getRepository(HistoryVoting);

        const votes = await voteRepository.find();

        return votes;
    }
}