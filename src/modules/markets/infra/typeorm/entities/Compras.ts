import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('TB_SIASG_COMPRAS')
export class Compras {
  @PrimaryColumn()
  Id: number;
  @Column()
  LINHA_MERCADO: number;
  @Column()
  LINHA_CATMAT: number;
  @Column()
  MERCADO: string;
  @Column()
  PDM: string;
  @Column()
  CATMAT: string;
  @Column()
  ATUALIZACAO: string;
  @Column()
  CODIGO_BR: string;
  @Column()
  DESCRICAO_CATMAT: string;
  @Column()
  UNIDADE_FORNECIMENTO: string;
  @Column()
  GENERICO: string;
  @Column()
  REGISTRO_ANVISA: string;
  @Column()
  DATA_COMPRA: string;
  @Column()
  MODALIDADE_COMPRA: string;
  @Column()
  DATA_INSERCAO: string;
  @Column()
  TIPO_COMPRA: string;
  @Column()
  FABRICANTE: string;
  @Column()
  CNPJ_FABRICANTE: string;
  @Column()
  FORNECEDOR: string;
  @Column()
  CNPJ_FORNECEDOR: string;
  @Column()
  QUALIFICACAO: string;
  @Column()
  NOME_INSTITUICAO: string;
  @Column()
  CNPJ_INSTITUICAO: string;
  @Column()
  MUNICIPIO: string;
  @Column()
  UF: string;
  @Column()
  QTD_ITENS_COMPRADOS: number;
  @Column()
  PRECO_UNITARIO: number;
  @Column()
  MEDIA_PONDERADA: number;
  @Column()
  TOTAL: number;
  @Column()
  ANO_MERCADO: number;
  @Column()
  IMPORTADO_POR: string;
  @Column()
  DATA_IMPORTACAO: Date;
}