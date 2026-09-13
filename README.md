# JB Prado — Site Institucional + App de Gestão

Projeto único Next.js App Router.
- Site institucional: `/` (publico)
- App de gestão: `/admin` (protegido por NextAuth)
- Banco: Supabase PostgreSQL via Prisma

## Variáveis de ambiente (.env.local)

```env
DATABASE_URL="postgresql://user:pass@db.supabase.co:5432/postgres"
NEXTAUTH_SECRET="seu-segredo-aqui"
NEXTAUTH_URL="http://localhost:3000"
WHATSAPP_NUMBER="5511999999999"
```

## Comandos

```bash
npm install
npx prisma migrate dev --name init
npx prisma db seed
npm run dev
```

## Estrutura
- `app/` — site + pages
- `app/admin/` — painel de gestão
- `prisma/` — schema + seed
- `lib/` — helpers
