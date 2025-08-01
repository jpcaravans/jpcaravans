# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 portfolio website for JP Caravans, a German company specializing in caravan/RV retrofitting services (solar panels, movers, etc.). The site is built with React, Tailwind CSS, and Framer Motion for animations.

## Development Commands

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## Architecture

### App Router Structure (Next.js 14)
- `app/layout.js` - Root layout with metadata and Inter font
- `app/page.js` - Home page composing all main sections
- `app/components/` - Reusable React components
- `app/api/send/route.js` - Email API endpoint using Resend service
- `app/datenschutz/` & `app/impressum/` - Legal pages with dedicated layouts

### Key Components
- `HeroSection` - Landing section with TypeAnimation and Framer Motion
- `ProjectsSection` - Filterable project showcase
- `AboutSection` & `AchievementsSection` - Company information
- `EmailSection` - Contact form integrated with API
- `Navbar` - Navigation with mobile overlay
- `Footer` - Site footer

### Styling & Assets
- Tailwind CSS with custom gradient configurations
- German language content (lang="de")
- Images stored in `public/images/projects/`
- Dark theme (#121212 background)

### Email Integration
- Uses Resend API for contact form emails
- Requires `RESEND_API_KEY` and `FROM_EMAIL` environment variables
- Sends to jpcaravans@web.de

### Configuration
- Next.js config allows Firebase Storage images
- jsconfig.json enables `@/*` path aliases
- Tailwind configured for app directory structure

## Development Notes

- Components use "use client" directive for client-side features
- Framer Motion used extensively for animations
- TypeAnimation for dynamic text effects
- React hooks pattern with useState/useRef
- Mobile-responsive design with Tailwind breakpoints