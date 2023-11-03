import { AppDataSource } from "../data_source";
import { HistoryVoting } from "../entities/HistoryVoting";

export class DeleteVoteService {
    async execute(id: string) {
        const voteRepository = AppDataSource.getRepository(HistoryVoting);

        if (!(await voteRepository.findOneBy({id}))) {
            return new Error("Voto não encontrado!");
        }

        await voteRepository.delete(id);
    }
}