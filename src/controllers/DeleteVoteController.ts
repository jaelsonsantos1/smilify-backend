import { DeleteVoteService } from "../services/DeleteVoteService";
import { Request, Response } from "express";

export class DeleteVoteController {
    async handle(request: Request, response: Response) {
        const id = request.params.id;

        const service = new DeleteVoteService();

        const vote = await service.execute(id);

        if (vote instanceof Error) {
            return response.status(400).json({
                message: vote.message
            });
        }

        return response.status(204).end();
    }
}