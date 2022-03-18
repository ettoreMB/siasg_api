import { Compras } from "../infra/typeorm/entities/Compras"

interface IComprasRepository {
  listAll(): Promise<Compras[]>
}

export { IComprasRepository }