import { AppDataSource } from "../data_source";
import { HistoryVoting } from "../entities/HistoryVoting";


export  class GetByIDVoteService {
    async execute(id: string) {
        const voteRepository = AppDataSource.getRepository(HistoryVoting);

        const vote = await voteRepository.findOneBy({id: id});

        if (!vote) {
            return new Error("Voto não encontrado!");
        }

        return vote;
    }
}