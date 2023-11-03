import { Router, json } from "express";
import { CreateVoteController } from "./controllers/CreateVoteController";
import { GetAllVotesController } from "./controllers/GetAllVotesController";
import { GetByIDVoteController } from "./controllers/GetByIDVoteController";
import { DeleteVoteController } from "./controllers/DeleteVoteController";

const routes = Router();

// Criar registro de voto
routes.post("/votar", new CreateVoteController().handle)
// Buscar todos os votos
routes.get("/votos", new GetAllVotesController().handle)
// Buscar votos pelo ID
routes.get("/voto/:id", new GetByIDVoteController().handle)
// Deletar um voto por ID
routes.delete("/voto/:id", new DeleteVoteController().handle)

export { routes };