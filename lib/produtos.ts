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
    nome: "Poste Padrão Caixa de Acrílico",
    categoria: "Bifásico",
    categoriaTag: "B1",
    specs: { carga: "18.000kW", disjuntor: "60A", cabo: "16mm" },
    inclui: ["Caixa de acrílico externa"],
    preco: "Sob consulta",
    validacao: "Válido até 25km da loja",
    imagem: "/produtos/poste-padrao-caixa-acrilico/4d85d750-e549-43cd-9321-6099384e8477.jpg",
    descricao: "Instalação completa com caixa de acrílico externa para proteção do medidor, ideal para residências que precisam de organização e segurança técnica.",
    observacoes: ["Pagamento à vista ou cartão de crédito, com recibo."],
  },
  {
    id: 2,
    nome: "Agrupamento 3 Medidores Bifásico",
    categoria: "Bifásico",
    categoriaTag: "B1",
    specs: { carga: "18.000kW", disjuntor: "60A", cabo: "16mm" },
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
    imagem: "/produtos/poste-padrao-trifasico-t1/42599f2a-5cc1-465d-b1f2-4efc0dcb76dc.png",
    descricao: "Solução completa para agrupamento de três residências no mesmo ponto, com todos os materiais e documentação técnica inclusos.",
  },
  {
    id: 3,
    nome: "Poste Padrão Trifásico T3",
    categoria: "Trifásico",
    categoriaTag: "T3",
    specs: { carga: "54.000kVA", disjuntor: "150A", cabo: "50mm, 1kV" },
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
    imagem: "/produtos/poste-padrao-trifasico-t3/40cbd618-932f-46c3-a360-5deb7e51c596.png",
    descricao: "Poste de alta capacidade para demandas trifásicas, com cabos de 50mm e chave disjuntora de 150A para grandes residências ou pequenos comércios.",
  },
  {
    id: 4,
    nome: "Poste Padrão Trifásico T1",
    categoria: "Trifásico",
    categoriaTag: "T1",
    specs: { carga: "25.000kW", disjuntor: "63A", cabo: "16mm, 1kV" },
    inclui: [],
    preco: "Sob consulta",
    validacao: "Válido até 25km da loja",
    imagem: "/produtos/poste-padrao-trifasico-t1/42599f2a-5cc1-465d-b1f2-4efc0dcb76dc.png",
    descricao: "Poste trifásico de entrada T1, com carga de 25.000kW e disjuntor de 63A, ideal para residências que precisam de maior potência.",
  },
  {
    id: 5,
    nome: "Poste Padrão Trifásico T2",
    categoria: "Trifásico",
    categoriaTag: "T2",
    specs: { carga: "38.000kW", disjuntor: "100A", cabo: "25kVA" },
    inclui: ["ART do engenheiro elétrico"],
    preco: "Sob consulta",
    validacao: "Válido até 25km da loja",
    imagem: "/produtos/poste-padrao-trifasico-t2/398c056c-7777-4b86-b7e3-6e2f8f4e6e2a.png",
    descricao: "Poste trifásico de médio porte T2, com ART inclusa, para residências de maior consumo ou pequenos estabelecimentos comerciais.",
  },
  {
    id: 6,
    nome: "Poste Padrão Duplo Bifásico",
    categoria: "Bifásico",
    categoriaTag: "B1",
    specs: { carga: "18.000kW", disjuntor: "60A", cabo: "16mm" },
    inclui: [],
    preco: "Sob consulta",
    validacao: "Válido até 25km da loja",
    imagem: "/produtos/poste-padrao-duplo-bifasico/328f02e2-364d-4802-919d-0be476355c97.png",
    descricao: "Poste duplo bifásico categoria B1, projetado para atender duas unidades com a mesma infraestrutura, garantindo economia e organização.",
  },
  {
    id: 7,
    nome: "Poste Padrão Acoplado Bifásico",
    categoria: "Bifásico",
    categoriaTag: "B1",
    specs: { carga: "18.000kW", disjuntor: "60A", cabo: "16mm" },
    inclui: [],
    preco: "Sob consulta",
    validacao: "Válido até 25km da loja",
    imagem: "/produtos/poste-padrao-acoplado-bifasico/22c5e247-72eb-4b86-953e-2e0365e37b0f.png",
    descricao: "Poste acoplado bifásico B1, solução compacta e eficiente para instalações que exigem integração direta à rede de distribuição.",
  },
];
