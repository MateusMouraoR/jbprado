import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const poste = await prisma.product.create({
    data: {
      name: "Poste Padrão de Energia 9m",
      category: "poste",
      cost: 280,
      price: 650,
      quantity: 45,
      minQuantity: 10,
      supplier: "PosteConcreto SP",
    },
  });

  await prisma.product.create({
    data: {
      name: "Kit Solar Residencial 3kW",
      category: "painel",
      cost: 8500,
      price: 12500,
      quantity: 12,
      minQuantity: 3,
      supplier: "SolarTech Brasil",
    },
  });

  await prisma.stockMove.create({
    data: { productId: poste.id, type: "entrada", quantity: 50, responsible: "João" },
  });

  await prisma.testimonial.create({
    data: { name: "Carlos M.", text: "Excelente atendimento e instalação rápida." },
  });

  await prisma.user.create({
    data: { email: "admin@jbprado.com.br", name: "Administrador JB Prado", role: "admin" },
  });

  console.log("Seed OK: poste, painel, estoque, depoimento, admin.");
}

main().then(async () => { await prisma.$disconnect(); }).catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
