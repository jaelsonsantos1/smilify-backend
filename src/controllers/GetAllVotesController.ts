import { Response } from 'express';
import { Request } from 'express';
import { getAllVotesService } from '../services/GetAllVotesService';


export class GetAllVotesController {
    async handle(request: Request, response: Response) {
        const service = new getAllVotesService();

        const votes = await service.execute();

        return response.json(votes);
    }
}