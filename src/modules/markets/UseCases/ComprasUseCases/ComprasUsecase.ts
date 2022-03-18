import { Compras } from "modules/markets/infra/typeorm/entities/Compras";
import { inject, injectable } from "tsyringe";
import { IComprasRepository } from "../../repositories/IComprasRepository";

@injectable()
export class ComprasUseCase {
  constructor(
    @inject('ComprasRepository')
    private comprasRepository: IComprasRepository
  ) { }

  async execute(): Promise<Compras[]> {
    const compras = await this.comprasRepository.listAll();

    return compras;
  }
}