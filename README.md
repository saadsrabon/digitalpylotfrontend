This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
##Recommended Next.js Frontend Architecture#
frontend/
│
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── register/
│   │       └── page.tsx
│   │
│   ├── (dashboard)/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── users/
│   │   │   └── page.tsx
│   │   ├── roles/
│   │   │   └── page.tsx
│   │   └── permissions/
│   │       └── page.tsx
│   │
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   └── card.tsx
│   │
│   ├── forms/
│   │   └── login-form.tsx
│   │
│   └── layout/
│       ├── sidebar.tsx
│       └── navbar.tsx
│
├── lib/
│   ├── api.ts
│   ├── auth.ts
│   └── utils.ts
│
├── hooks/
│   └── useAuth.ts
│
├── store/
│   └── authStore.ts
│
├── types/
│   ├── user.ts
│   ├── role.ts
│   └── permission.ts
│
├── services/
│   ├── auth.service.ts
│   ├── user.service.ts
│   └── role.service.ts
│
├── middleware.ts
└── env.ts
