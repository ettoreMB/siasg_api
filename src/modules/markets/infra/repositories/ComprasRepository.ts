import { getRepository, Repository } from "typeorm";
import { IComprasRepository } from "../../repositories/IComprasRepository";
import { Compras } from "../typeorm/entities/Compras";

export class ComprasRepository implements IComprasRepository {
  private repository: Repository<Compras>
  constructor() {
    this.repository = getRepository(Compras)
  }
  async listAll(): Promise<Compras[]> {
    const compras = await this.repository.find()
    return compras
  }
}