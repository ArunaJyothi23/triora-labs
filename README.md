# Triora Labs

Professional marketing website for Triora Labs — Next.js App Router, TypeScript, Tailwind CSS, and full SEO.

## Setup

```bash
cd C:\Users\MALLESWARI\triora-labs
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

Home, Services, Pricing, Work, About, Process, Contact, FAQ, Courses, Privacy Policy, Terms of Service.

## Notes

- Contact and waitlist forms validate on the server. Connect email delivery (Resend, SES, etc.) in the API routes when you are ready.
- Replace social URLs in `src/lib/site.ts`.
- Set `NEXT_PUBLIC_SITE_URL` in production for canonical URLs and the sitemap.
