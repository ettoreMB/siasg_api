import { Request, Response } from "express";
import { container } from "tsyringe";
import { ComprasUseCase } from "./ComprasUsecase";

export class ComprasController {
  async handle(req: Request, res: Response): Promise<Response> {
    const comprasUseCase = container.resolve(ComprasUseCase);

    const compras = await comprasUseCase.execute();
    return res.json(compras)
  }
}