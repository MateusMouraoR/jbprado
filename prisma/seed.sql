INSERT INTO "Product" (id, name, category, cost, price, quantity, "minQuantity", supplier, "createdAt", "updatedAt")
VALUES
  (gen_random_uuid(), 'Poste Padrão de Energia 9m', 'poste', 280.00, 650.00, 45, 10, 'PosteConcreto SP', now(), now()),
  (gen_random_uuid(), 'Kit Solar Residencial 3kW', 'painel', 8500.00, 12500.00, 12, 3, 'SolarTech Brasil', now(), now());

INSERT INTO "StockMove" (id, "productId", type, quantity, responsible, "createdAt")
SELECT gen_random_uuid(), id, 'entrada', 50, 'João', now() FROM "Product" WHERE name = 'Poste Padrão de Energia 9m';

INSERT INTO "Testimonial" (id, name, text, "createdAt")
VALUES (gen_random_uuid(), 'Carlos M.', 'Excelente atendimento e instalação rápida.', now());

INSERT INTO "User" (id, email, name, role, "createdAt", "updatedAt")
VALUES (gen_random_uuid(), 'admin@jbprado.com.br', 'Administrador JB Prado', 'admin', now(), now());
