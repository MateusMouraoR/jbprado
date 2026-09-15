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

export const produtos: Produto[] = [
  {
    id: 1,
    nome: "Caixa de Acrílico Bifásico B1",
    categoria: "Bifásico",
    categoriaTag: "B1",
    specs: { carga: "18.000kW", disjuntor: "60A", cabo: "16mm²" },
    inclui: ["Caixa de acrílico externa", "Poste padrão", "Instalação básica"],
    preco: "Sob consulta",
    validacao: "Válido até 25km da loja",
    imagem: "/produtos/poste-padrao-caixa-acrilico/4d85d750-e549-43cd-9321-6099384e8477.jpg",
    descricao: "Caixa de acrílico externa para proteção do medidor bifásico B1. Ideal para residências que precisam de organização e segurança técnica com carga de 18.000kW, disjuntor 60A e cabo 16mm².",
    observacoes: ["Pagamento à vista ou cartão de crédito, com recibo."],
  },
  {
    id: 2,
    nome: "Agrupamento 3 Medidores Bifásico",
    categoria: "Bifásico",
    categoriaTag: "B1",
    specs: { carga: "18.000kW", disjuntor: "60A", cabo: "16mm²" },
    inclui: [
      "Abertura do buraco",
      "Instalação do poste",
      "Caixas, disjuntores, cabos",
      "ART do engenheiro elétrico",
      "Abertura do pedido de ligação na Elektro (pessoa física)",
    ],
    naoInclui: ["Alvenaria (pedreiro para chumbar as caixas de medição)"],
    observacoes: ["Cada morador pode optar por pagamento à vista ou parcelado."],
    preco: "Sob consulta",
    validacao: "Válido até 25km da loja",
    imagem: "/produtos/poste-padrao-duplo-bifasico/328f02e2-364d-4802-919d-0be476355c97.png",
    descricao: "Solução completa para agrupamento de três residências no mesmo ponto bifásico B1, com carga 18.000kW, disjuntor 60A e cabo 16mm². Todos os materiais e documentação técnica inclusos.",
  },
  {
    id: 3,
    nome: "Trifásico T1/T2/T3",
    categoria: "Trifásico",
    categoriaTag: "T3",
    specs: { carga: "54.000kVA", disjuntor: "150A", cabo: "50mm², 1kV" },
    inclui: [
      "Abertura do buraco (em terra)",
      "Aterramento",
      "Armação",
      "Instalação",
      "ART do engenheiro",
      "Pedido de ligação na Elektro (pessoa física)",
    ],
    naoInclui: ["Alvenaria (por conta do cliente)"],
    observacoes: [
      "Empresa não se responsabiliza por prazo caso a Elektro peça melhoria de rede na rua do cliente.",
    ],
    preco: "Sob consulta",
    validacao: "Válido até 25km da loja",
    imagem: "/produtos/poste-trifasico-t3/40cbd618-932f-46c3-a360-5deb7e51c596.png",
    descricao: "Poste trifásico T3 de alta capacidade com carga 54.000kVA, disjuntor 150A e cabos 50mm² 1kV. Para grandes residências ou pequenos comércios.",
  },
  {
    id: 4,
    nome: "Duplo Bifásico B1",
    categoria: "Bifásico",
    categoriaTag: "B1",
    specs: { carga: "18.000kW", disjuntor: "60A", cabo: "16mm²" },
    inclui: ["Poste duplo", "Instalação básica", "Caixas de medição"],
    preco: "Sob consulta",
    validacao: "Válido até 25km da loja",
    imagem: "/produtos/poste-padrao-duplo-bifasico/4b8d980a-15e4-4ec0-b4b2-dd0dd1b84919.png",
    descricao: "Poste duplo bifásico B1 para atender duas unidades com a mesma infraestrutura. Carga 18.000kW, disjuntor 60A, cabo 16mm².",
  },
  {
    id: 5,
    nome: "Acoplado Bifásico B1",
    categoria: "Bifásico",
    categoriaTag: "B1",
    specs: { carga: "18.000kW", disjuntor: "60A", cabo: "16mm²" },
    inclui: ["Poste acoplado", "Instalação básica"],
    preco: "Sob consulta",
    validacao: "Válido até 25km da loja",
    imagem: "/produtos/poste-padrao-acoplado-bifasico/22c5e247-72eb-4b86-953e-2e0365e37b0f.png",
    descricao: "Poste acoplado bifásico B1, solução compacta para integração direta à rede de distribuição. Carga 18.000kW, disjuntor 60A, cabo 16mm².",
  },
];
