# Han-Ling Hsu — Professional Portfolio

A professional portfolio presenting Han-Ling Hsu’s product, growth, and analytics experience through measurable outcomes, selected projects, and career history.

Built with Next.js, TypeScript, and plain CSS. The site is self-contained and ready to deploy on Vercel.

The homepage uses server-rendered content and a CSS-first impact journey, so the
story remains readable, searchable, and accessible without client-side JavaScript.
Supported browsers receive subtle scroll-linked progress and scene transitions;
reduced-motion visitors receive the complete static layout.

## Local development

From this directory:

```bash
pnpm install
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000).

Using npm instead:

```bash
npm install
npm run dev
```

## Production build

Build and run the production version locally:

```bash
pnpm build
pnpm start
```

Or with npm:

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Import the repository into Vercel.
2. Leave **Root Directory** at the repository root.
3. Confirm the **Framework Preset** is **Next.js**.
4. Optionally add `NEXT_PUBLIC_SITE_URL` with the final public URL, such as `https://your-domain.com`, for canonical metadata.
5. Deploy.

## Profile photo

Replace `public/profile.jpg` with an approved, professional square headshot. Keep the same filename so no code changes are required.

## Privacy and deployment scope

Deploy this repository only. Never add files from the original parent workspace—especially CV source files, tokens, environment secrets, databases, or other private application materials.
