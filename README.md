# Faraz Blog

A modern, SEO-optimized personal blog website built with React and TypeScript. This blog features articles on web development, SEO strategies, technology, and career growth.

## 🚀 Features

- **Article Management**: Browse and read articles organized by categories (Web Dev, SEO, Tech, Career)
- **Search Functionality**: Search articles by title, subtitle, category, or tags
- **Category Filtering**: Filter articles by specific categories
- **SEO Optimized**: Built with SEO best practices including structured data (JSON-LD), meta tags, and semantic HTML
- **Responsive Design**: Fully responsive design that works on all devices
- **Newsletter Subscription**: Newsletter signup form integrated with Supabase
- **Social Sharing**: Share articles on LinkedIn and copy article links
- **Dark Mode Support**: Theme support using next-themes
- **Related Articles**: Display related articles on article pages
- **Modern UI**: Beautiful UI built with shadcn/ui components and Tailwind CSS

## 🛠️ Tech Stack

- **Framework**: React 18.3 with TypeScript
- **Build Tool**: Vite 5.4
- **Styling**: Tailwind CSS 3.4 with custom animations
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Routing**: React Router DOM 6.30
- **State Management**: TanStack Query (React Query) 5.83
- **Form Handling**: React Hook Form 7.61 with Zod validation
- **Icons**: Lucide React
- **Notifications**: Sonner (toast notifications)
- **Backend**: Supabase (for newsletter subscriptions)
- **Typography**: Tailwind Typography plugin
- **Resend**: A

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** or **bun** (package manager)
- **Git** (for version control)

## 🏗️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Faraz-Blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Set up environment variables** (if using Supabase)
   Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

## 🚀 Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:8080` (or the port specified in `vite.config.ts`).

## 📦 Build

Build the project for production:

```bash
npm run build
# or
yarn build
# or
bun build
```

The production build will be created in the `dist` directory.

### Development Build

Build with development mode:

```bash
npm run build:dev
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 🧪 Linting

Run ESLint to check for code quality issues:

```bash
npm run lint
```

## 📁 Project Structure

```
Faraz-Blog/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and other assets
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── ArticleCard.tsx
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── IntroSection.tsx
│   │   ├── NewsletterForm.tsx
│   │   ├── SearchBar.tsx
│   │   └── SEOHead.tsx
│   ├── data/             # Data files (articles, etc.)
│   ├── hooks/            # Custom React hooks
│   ├── integrations/     # Third-party integrations
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   │   ├── About.tsx
│   │   ├── Article.tsx
│   │   ├── Articles.tsx
│   │   ├── Career.tsx
│   │   ├── Contact.tsx
│   │   ├── Index.tsx
│   │   ├── NotFound.tsx
│   │   ├── Privacy.tsx
│   │   ├── Seo.tsx
│   │   ├── Tech.tsx
│   │   ├── Terms.tsx
│   │   └── WebDev.tsx
│   ├── App.tsx           # Main App component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── supabase/             # Supabase configuration
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## 🎨 Customization

### Adding New Articles

Articles are managed in `src/data/articles.ts`. Add new articles by following the existing article structure.

### Styling

The project uses Tailwind CSS with custom configuration in `tailwind.config.ts`. Custom colors, animations, and utilities can be added there.

### Components

UI components are built with shadcn/ui. To add new components:

```bash
npx shadcn-ui@latest add [component-name]
```

## 🌐 Routes

- `/` - Homepage with featured articles
- `/article/:id` - Individual article page
- `/articles` - All articles listing
- `/web-dev` - Web Development category page
- `/seo` - SEO category page
- `/tech` - Technology category page
- `/career` - Career category page
- `/about` - About page
- `/contact` - Contact page
- `/privacy` - Privacy policy
- `/terms` - Terms of service
- `*` - 404 Not Found page

## 🔧 Configuration

### Vite Configuration

The Vite configuration is in `vite.config.ts`. The development server runs on port 8080 by default.

### TypeScript Configuration

TypeScript settings are configured in `tsconfig.json` and `tsconfig.app.json`.

### Path Aliases

The project uses `@/` as an alias for the `src/` directory, configured in `vite.config.ts`.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

This is a personal blog project. If you'd like to contribute or report issues, please feel free to open an issue or submit a pull request.

## 📄 License

This project is private and personal. All content and code are the intellectual property of Faraz Sualeh.

## 👤 Author

**Faraz Sualeh**

- Website: [farazsualeh.com](https://farazsualeh.com)
- Blog: Practical articles on web development, SEO, and career growth
