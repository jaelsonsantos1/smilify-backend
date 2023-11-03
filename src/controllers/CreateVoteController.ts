import { Request, Response } from "express";
import { CreateVoteService } from "../services/CreateVoteService";

export class CreateVoteController {
    async handle(request: Request, response: Response) {
        const { type, comments, ip_client } = request.body;

        const service = new CreateVoteService();

        const vote = await service.execute({type, comments, ip_client});

        return response.json(vote);
    }
}