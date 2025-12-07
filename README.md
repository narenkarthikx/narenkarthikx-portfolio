# Naren Karthik's Portfolio Website

A modern, interactive portfolio website built with Next.js, React, and Tailwind CSS showcasing projects in AI, Data Engineering, and Quantum Computing.

## Features

- **Modern Design** - Dark theme with cyan/blue accents for a tech-forward aesthetic
- **Smooth Navigation** - Seamless scroll-based navigation between sections
- **Responsive Design** - Fully mobile-responsive with adaptive layouts
- **Interactive Components** - Engaging project cards, skill visualizations, and timeline
- **Performance Optimized** - Built with Next.js for optimal performance
- **Accessibility** - Semantic HTML and ARIA attributes for screen readers

## Project Sections

- **Hero** - Eye-catching introduction with role and call-to-action
- **About** - Personal background and professional summary
- **Projects** - Detailed showcase of key projects:
  - Learn Buddy - AI platform for bridging educational gaps
  - AI Expense Tracker - Image-based expense management
  - Quantum Game - Quantum computing project
  - GymSync - Fitness management system
- **Skills** - Organized tech stack by categories
- **Experience** - Timeline of professional experience
- **Achievements** - Recognition and awards
- **Contact** - Easy ways to connect

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **pnpm** (recommended for faster installs)
- A code editor (VS Code recommended)
- Git (optional, for version control)

## Local Setup Instructions

### Step 1: Clone or Download the Project

\`\`\`bash
# If you have git installed, you can clone the repository
git clone <your-repo-url>
cd naren-portfolio

# Or download the ZIP file and extract it
cd naren-portfolio
\`\`\`

### Step 2: Install Dependencies

Using npm:
\`\`\`bash
npm install
\`\`\`

Using pnpm (faster):
\`\`\`bash
pnpm install
\`\`\`

Using yarn:
\`\`\`bash
yarn install
\`\`\`

This command will install all required packages including:
- Next.js
- React
- Tailwind CSS
- Lucide React (icons)
- And other dependencies

### Step 3: Start Development Server

Using npm:
\`\`\`bash
npm run dev
\`\`\`

Using pnpm:
\`\`\`bash
pnpm dev
\`\`\`

Using yarn:
\`\`\`bash
yarn dev
\`\`\`

The development server will start and you'll see output like:
\`\`\`
> next dev

  ▲ Next.js 16.0.6
  - Local:        http://localhost:3000
  - Environments: .env.local

✓ Ready in 2.1s
\`\`\`

### Step 4: Open in Browser

Open your browser and navigate to:
\`\`\`
http://localhost:3000
\`\`\`

Your portfolio will load with all interactive features ready to use.

## Project Structure

\`\`\`
naren-portfolio/
├── app/
│   ├── page.tsx                 # Main page component
│   ├── layout.tsx               # Root layout with metadata
│   └── globals.css              # Global styles and Tailwind
├── src/
│   ├── components/
│   │   ├── Navigation.jsx       # Top navigation bar
│   │   ├── Hero.jsx             # Hero section
│   │   ├── About.jsx            # About section
│   │   ├── Projects.jsx         # Projects showcase
│   │   ├── Skills.jsx           # Skills section
│   │   ├── Experience.jsx       # Experience timeline
│   │   ├── Achievements.jsx     # Achievements section
│   │   ├── Contact.jsx          # Contact form
│   │   └── Footer.jsx           # Footer section
│   └── index.jsx                # Entry point
├── public/                       # Static assets (images, icons)
├── package.json                 # Dependencies and scripts
├── next.config.mjs              # Next.js configuration
├── tailwind.config.cjs          # Tailwind CSS configuration
├── postcss.config.cjs           # PostCSS configuration
└── tsconfig.json                # TypeScript configuration
\`\`\`

## Available Scripts

### Development
\`\`\`bash
npm run dev      # Start development server at http://localhost:3000
\`\`\`

### Production Build
\`\`\`bash
npm run build    # Create optimized production build
\`\`\`

### Start Production Server
\`\`\`bash
npm start        # Run the production build locally
\`\`\`

### Linting (Optional)
\`\`\`bash
npm run lint     # Check code quality with ESLint
\`\`\`

## Customization

### Modify Content

All content is in the component files under `src/components/`:

1. **Navigation** - Update navigation items in `Navigation.jsx`
2. **Hero** - Edit heading and CTA in `Hero.jsx`
3. **Projects** - Update project details in `Projects.jsx`
4. **Skills** - Modify tech stack in `Skills.jsx`
5. **Experience** - Update work history in `Experience.jsx`
6. **Achievements** - Add awards/certifications in `Achievements.jsx`
7. **Contact** - Update contact information in `Contact.jsx`

### Modify Styles

1. **Global Styles** - Edit `app/globals.css`
2. **Tailwind Config** - Edit `tailwind.config.cjs` for theme colors
3. **Component Styles** - Use Tailwind classes directly in component files

### Update Metadata

Edit `app/layout.tsx` to update:
- Page title
- Meta description
- Favicon and icons
- Social media cards

## Deployment

### Deploy to Vercel (Recommended)

1. Push your project to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project" and select your repository
4. Vercel will automatically detect Next.js and deploy
5. Your site will be live at `your-project.vercel.app`

### Deploy to Other Platforms

The built files are in the `.next` folder after running `npm run build`.

**Netlify:**
- Connect GitHub repo to Netlify
- Set build command to `npm run build`
- Set publish directory to `.next`

**Other Platforms:**
- Follow platform-specific Next.js deployment guides

## Troubleshooting

### Port 3000 Already in Use
\`\`\`bash
# Use a different port
npm run dev -- -p 3001
\`\`\`

### Dependencies Installation Issues
\`\`\`bash
# Clear npm cache and reinstall
rm -rf node_modules package-lock.json
npm install
\`\`\`

### Build Errors
\`\`\`bash
# Clear Next.js cache
rm -rf .next
npm run build
\`\`\`

## Performance Optimization

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- CSS minification with Tailwind
- Production build optimization with Next.js

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Dependencies

- **Next.js 16** - React framework
- **React 19** - UI library
- **Tailwind CSS 4** - Utility-first CSS
- **Lucide React** - Icon library

## Environment Variables

No environment variables are required for local development. All content is static.

## Future Enhancements

- Add dark/light mode toggle
- Implement email contact form backend
- Add blog section
- Integrate analytics
- Add animations with Framer Motion
- Implement CMS for content management

## License

This project is open source and available under the MIT License.

## Contact

- **Email** - [Your Email]
- **LinkedIn** - [Your LinkedIn Profile]
- **GitHub** - [Your GitHub Profile]

## Acknowledgments

- Built with Next.js and Tailwind CSS
- Icons from Lucide React
- Inspired by modern portfolio best practices

---

**Last Updated**: December 2025
