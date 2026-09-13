const { PrismaClient } = require("@prisma/client");
const p = new PrismaClient();
(async () => {
  try {
    await p.product.create({ data: { name: "Seed Final", category: "poste", cost: 280, price: 650, quantity: 45, minQuantity: 10, supplier: "PosteConcreto SP" } });
    console.log("Seed final OK");
  } catch (e) { console.error(e); }
  finally { await p.$disconnect(); }
})();
