# Next.js SEO-Optimized Template

A modern, SEO-optimized Next.js template with Tailwind CSS and shadcn/ui components, ready for quick deployment on Vercel.

## Features

-   ⚡️ [Next.js 14](https://nextjs.org/) - React framework for production
-   🎨 [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
-   🧩 [shadcn/ui](https://ui.shadcn.com/) - Re-usable components built with Radix UI and Tailwind CSS
-   🔍 SEO Optimized
    -   Meta tags optimization
    -   Open Graph support
    -   Structured data
-   📱 Responsive Design
-   🚀 Easy Vercel Deployment
-   ✨ Modern UI Components
-   📦 TypeScript Support

## Getting Started

1. Clone this template:

```bash
npx create-next-app@latest your-project-name --example [repository-url]
```

2. Install dependencies:

```bash
cd your-project-name
npm install
```

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── layout.tsx    # Root layout with metadata
│   └── page.tsx      # Home page component
├── components/       # Reusable UI components
├── public/          # Static assets
└── styles/          # Global styles
```

## Customization

### Styling

This template uses Tailwind CSS for styling. You can customize the theme in `tailwind.config.ts`.

### Components

shadcn/ui components can be customized in their respective files under the `components` directory.

### SEO

Update the metadata in `app/layout.tsx` to match your project's needs.

## Deployment

The easiest way to deploy your Next.js app is through [Vercel](https://vercel.com):

1. Push your code to a Git repository
2. Import your project to Vercel
3. Vercel will detect Next.js automatically and configure the build settings

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=your-repo-url)

## Learn More

To learn more about the technologies used in this template:

-   [Next.js Documentation](https://nextjs.org/docs)
-   [Tailwind CSS Documentation](https://tailwindcss.com/docs)
-   [shadcn/ui Documentation](https://ui.shadcn.com)
-   [Vercel Documentation](https://vercel.com/docs)

## License

MIT License

Feel free to use this template for your projects! 🚀
