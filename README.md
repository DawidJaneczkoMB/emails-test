<div align="center">
  <img src="https://placehold.co/120x120" alt="Email Renderer Logo" width="120" height="120">
  <h1>Email Renderer - Payments AI</h1>
</div>

An internal email renderer and previewer application for Payments AI. Create, preview, and test email templates with ease. Built with React, TypeScript, and [react-email](https://react-email.com/).

<details>
  <summary><strong>Table of Contents</strong></summary>
  <ol>
    <li><a href="#features">Features</a></li>
    <li><a href="#tech-stack">Tech Stack</a></li>
    <li><a href="#prerequisites">Prerequisites</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#environment-setup">Environment Setup</a></li>
    <li><a href="#development">Development</a></li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#web-interface">Web Interface</a></li>
        <li><a href="#api-endpoints">API Endpoints</a></li>
        <li><a href="#curl-examples">cURL Examples</a></li>
      </ul>
    </li>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#adding-a-new-template">Adding a New Template</a></li>
  </ol>
</details>

## Features

- **Template Preview** - Live preview of email templates in the browser
- **Template Management** - Browse and manage multiple email template variants
- **Send Test Emails** - Send test emails via SMTP
- **Code View** - View generated HTML and plain text versions
- **API Key Authentication** - Secure template rendering and email sending
- **React-Email Integration** - Type-safe email component library

## Tech Stack
- **Framework**: React 19 + TanStack Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Email**: [react-email](https://react-email.com/)
- **Build Tool**: Vite
- **State Management**: TanStack Query
- **Forms**: React Hook Form + Zod validation
- **Backend**: Nitro
- **Package Manager**: pnpm

## Prerequisites

- **Node.js**: v22 or higher
- **pnpm**: v10.27.0 or higher

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd emails-test
```

2. Install dependencies:
```bash
pnpm install
```

3. Generate an API key:
```bash
pnpm generate-api-key
```

This will output a hashed key - save both the original key and the hash for your `.env` file.

## Environment Setup

Create a `.env` file in the project root with the following variables:

```bash
# API Configuration
HASHED_API_KEY=<your-hashed-api-key-from-generate-api-key>

# SMTP Configuration
SMTP_HOST=<your-smtp-host>
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USERNAME=<your-smtp-username>
SMTP_PASSWORD=<your-smtp-password>

# Email Configuration
EMAIL_FROM_ADDRESS=<sender-email@example.com>
EMAIL_FROM_NAME=PaymentsAI Email Renderer

# Assets URL (for email images)
VITE_ASSETS_URL=https://example.com/assets
```

## Development

Start the development server:

```bash
pnpm dev
```

The app will be available at `http://localhost:3883`

## Usage

### Web Interface

1. Navigate to `http://localhost:3883`
2. Browse available email templates from the sidebar
3. Select a template variant to preview
4. View the rendered email, code, or send a test email

### API Endpoints

#### Render Template

```
POST /api/render
```

Renders an email template with provided props and returns HTML and plain text versions.

**Request Headers:**
```
X-API-Key: <your-api-key>
Content-Type: application/json
```

**Request Body:**
```json
{
  "templateName": "AccessToOrganizationGranted",
  "props": {
    "organizationName": "Acme Corp",
    "organizationDashboardUrl": "https://app.example.com/dashboard"
  }
}
```

**Response:**
```json
{
  "html": "<html>...</html>",
  "plainText": "..."
}
```

#### Send Email

```
POST /api/send-email
```

Sends a test email with a rendered template.

**Request Headers:**
```
X-API-Key: <your-api-key>
Content-Type: application/json
```

**Request Body:**
```json
{
  "templateName": "AccessToOrganizationGranted",
  "variant": "default",
  "recipientEmail": "test@example.com"
}
```

### cURL Examples

**Render a template with props:**

```bash
curl -X POST http://localhost:3883/api/render \
  -H "X-API-Key: <your-api-key>" \
  -H "Content-Type: application/json" \
  -d '{
    "templateName": "AccessToOrganizationGranted",
    "props": {
      "organizationName": "Tech Startup Inc",
      "organizationDashboardUrl": "https://dashboard.paymentsai.com"
    }
  }'
```

**Send a test email:**

```bash
curl -X POST http://localhost:3883/api/send-email \
  -H "X-API-Key: <your-api-key>" \
  -H "Content-Type: application/json" \
  -d '{
    "templateName": "AccessToOrganizationGranted",
    "variant": "default",
    "recipientEmail": "dev@example.com"
  }'
```

## Project Structure

```
src/
├── components/
│   ├── app/           # UI components (Layout, Sidebar, TopBar, etc.)
│   └── emails/        # Reusable email building blocks
├── templates/         # Email template components (default exports)
├── previews/          # Template preview components with mock data (named exports)
├── routes/            # TanStack Router route definitions
│   └── api/           # API endpoints
├── server/            # Server-side logic (email sending, preview generation)
├── middleware/        # Request middleware (API authentication)
├── utils/
│   ├── emails/        # Email-specific utilities (formatting, icons, theme etc.)
│   └── emailLoader.ts # Dynamic template loading
├── env/               # Environment variable validation
├── types/             # TypeScript type definitions
└── router.tsx         # Router configuration
```

## Adding a New Template

Follow these steps to add a new email template:

### 1. Create the Template Component

Create a new file in `src/templates/YourTemplateNameHere.tsx`:

```typescript
import { Main } from "@/components/emails/Main";
import { HeroSection } from "@/components/emails/HeroSection";
import { Text } from "@/components/emails/Text";
import { Button } from "@/components/emails/Button";

type YourTemplateNameHereProps = {
  recipientName: string;
  actionUrl: string;
};

export function YourTemplateNameHere({
  recipientName,
  actionUrl,
}: YourTemplateNameHereProps) {
  return (
    <Main>
      <HeroSection image="hero.png">
        Welcome, {recipientName}!
      </HeroSection>
      <Text>This is your email content.</Text>
      <Button href={actionUrl}>Take Action</Button>
    </Main>
  );
}
```

**Important:** Use a **named export** (not default export).

### 2. Create the Preview Component

Create a new file in `src/previews/YourTemplateNameHere.tsx` with the exact same name:

```typescript
import { YourTemplateNameHere } from "@/templates/YourTemplateNameHere";
import { faker } from "@faker-js/faker";

export function yourTemplateNameHere() {
  return (
    <YourTemplateNameHere
      recipientName={faker.person.fullName()}
      actionUrl={faker.internet.url()}
    />
  );
}
```

**Important:** 
- The preview file must have the **same name** as the template file
- Use a **named export** (camelCase function name)
- Use `@faker-js/faker` to generate realistic mock data for props

### 3. Access Your Template

The template will be automatically available:
- **Web UI**: Browse the sidebar and select your template
- **API**: Use the template name in API requests

Example:
```bash
curl -X POST http://localhost:3883/api/render \
  -H "X-API-Key: <your-api-key>" \
  -H "Content-Type: application/json" \
  -d '{
    "templateName": "YourTemplateNameHere",
    "props": {
      "recipientName": "John Doe",
      "actionUrl": "https://example.com"
    }
  }'
```