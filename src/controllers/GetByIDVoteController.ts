import { GetByIDVoteService } from "../services/GetByIDVoteServise";
import { Request, Response } from "express";

export class GetByIDVoteController {
    async handle(request: Request, response: Response) {
        const service = new GetByIDVoteService();

        const id = request.url.split("/")[2];

        const vote = await service.execute(id);

        if (vote instanceof Error) {
            return response.status(400).json({
                message: "Voto não encontrado!"
            });
        }

        return response.json(vote);
    }
}