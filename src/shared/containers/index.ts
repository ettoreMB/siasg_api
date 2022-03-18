import { container } from 'tsyringe';

import { IComprasRepository } from 'modules/markets/repositories/IComprasRepository';
import { ComprasRepository } from 'modules/markets/infra/repositories/ComprasRepository';

//ComprasRepository
container.registerSingleton<IComprasRepository>(
  "ComprasRepository",
  ComprasRepository
)