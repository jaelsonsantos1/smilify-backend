import { AppDataSource } from "../data_source";
import { HistoryVoting } from "../entities/HistoryVoting";

type VoteRequest = {
    type: number;
    comments: string;
    ip_client: string;
}

export class CreateVoteService {

    async execute({type, comments, ip_client}: VoteRequest): Promise<HistoryVoting> {
        const voteRepository = AppDataSource.getRepository(HistoryVoting);

        const vote = voteRepository.create({
            type,
            comments,
            ip_client
        });

        await voteRepository.save(vote);

        return vote;
    }
}