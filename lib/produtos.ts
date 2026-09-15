export type Produto = {
  id: number;
  nome: string;
  categoria: "Bifásico" | "Trifásico";
  categoriaTag: string;
  specs: { carga: string; disjuntor: string; cabo: string };
  inclui: string[];
  naoInclui?: string[];
  observacoes?: string[];
  preco: string;
  validacao: string;
  imagem: string;
  descricao: string;
};
export const produtos = [
  { id: 1, nome: "Caixa de Acrílico Bifásico B1", categoria: "Bifásico", categoriaTag: "B1", specs: { carga: "18.000kW", disjuntor: "60A", cabo: "16mm²" }, inclui: ["Caixa de acrílico externa"], preco: "Sob consulta", validacao: "Válido até 25km da loja", imagem: "/produtos/poste-padrao-caixa-acrilico/4d85d750-e549-43cd-9321-6099384e8477.jpg", descricao: "..." },
  { id: 2, nome: "Agrupamento 3 Medidores Bifásico", categoria: "Bifásico", categoriaTag: "B1", specs: { carga: "18.000kW", disjuntor: "60A", cabo: "16mm²" }, inclui: ["Abertura do buraco","Instalação do poste"], naoInclui: ["Alvenaria"], observacoes: ["Cada morador..."], preco: "Sob consulta", validacao: "Válido até 25km da loja", imagem: "/produtos/poste-padrao-duplo-bifasico/328f02e2-364d-4802-919d-0be476355c97.png", descricao: "..." },
  { id: 3, nome: "Trifásico T1/T2/T3", categoria: "Trifásico", categoriaTag: "T3", specs: { carga: "54.000kVA", disjuntor: "150A", cabo: "50mm², 1kV" }, inclui: ["Abertura do buraco","Aterramento","Instalação","ART","Pedido Elektro"], naoInclui: ["Alvenaria"], observacoes: ["Sem garantia de prazo..."], preco: "Sob consulta", validacao: "Válido até 25km da loja", imagem: "/produtos/poste-trifasico-t3/40cbd618-932f-46c3-a360-5deb7e51c596.png", descricao: "Poste trifásico T3..." },
  { id: 4, nome: "Duplo Bifásico B1", categoria: "Bifásico", categoriaTag: "B1", specs: { carga: "18.000kW", disjuntor: "60A", cabo: "16mm²" }, inclui: ["Poste duplo"], preco: "Sob consulta", validacao: "Válido até 25km da loja", imagem: "/produtos/poste-padrao-duplo-bifasico/4b8d980a-15e4-4ec0-b4b2-dd0dd1b84919.png", descricao: "Poste duplo..." },
  { id: 5, nome: "Acoplado Bifásico B1", categoria: "Bifásico", categoriaTag: "B1", specs: { carga: "18.000kW", disjuntor: "60A", cabo: "16mm²" }, inclui: ["Poste acoplado"], preco: "Sob consulta", validacao: "Válido até 25km da loja", imagem: "/produtos/poste-padrao-acoplado-bifasico/22c5e247-72eb-4b86-953e-2e0365e37b0f.png", descricao: "Poste acoplado..." }
];
