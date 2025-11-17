# Project Structure

This document describes the file structure of the application.

## Overview

The project follows a **screen-based architecture** where each screen has its own folder containing related components, hooks, and types. Shared code is organized in the `src` directory.

## Directory Structure

```
my-app/
├── app/                          # Expo Router screens (file-based routing)
│   ├── (auth)/                   # Auth group (route group)
│   │   ├── login/
│   │   │   ├── components/       # Screen-specific components
│   │   │   ├── hooks/            # Screen-specific hooks
│   │   │   ├── types/            # Screen-specific types
│   │   │   └── index.tsx         # Screen component
│   │   └── register/
│   │       ├── components/
│   │       ├── hooks/
│   │       ├── types/
│   │       └── index.tsx
│   ├── (tabs)/                   # Tabs group
│   │   ├── home/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── types/
│   │   │   └── index.tsx
│   │   └── profile/
│   │       ├── components/
│   │       ├── hooks/
│   │       ├── types/
│   │       └── index.tsx
│   ├── _layout.tsx               # Root layout
│   └── index.tsx                 # Home/index route
│
├── src/                          # Shared code
│   ├── components/               # Reusable components
│   │   ├── ui/                   # UI components (Button, Input, etc.)
│   │   ├── layout/               # Layout components (Header, Container, etc.)
│   │   └── index.ts              # Component exports
│   ├── hooks/                    # Shared custom hooks
│   │   └── index.ts
│   ├── types/                    # Shared TypeScript types
│   │   └── index.ts
│   ├── utils/                    # Utility functions
│   │   └── index.ts
│   ├── services/                 # Business logic & API
│   │   ├── api/                  # API clients and endpoints
│   │   ├── storage/              # Storage services
│   │   └── index.ts
│   ├── constants/                # App constants
│   │   └── index.ts
│   ├── theme/                    # Theme configuration
│   │   └── index.ts
│   ├── config/                   # App configuration
│   │   └── index.ts
│   └── lib/                      # Third-party library wrappers
│       └── index.ts
│
├── assets/                       # Static assets
│   └── images/                   # Image files
│
└── [config files]                # package.json, tsconfig.json, etc.
```

## Screen Structure

Each screen follows this pattern:

```
screen-name/
├── components/          # Components used only by this screen
│   └── ComponentName.tsx
├── hooks/              # Custom hooks specific to this screen
│   └── useScreenHook.ts
├── types/              # TypeScript types/interfaces for this screen
│   └── index.ts
└── index.tsx           # Main screen component
```

## Best Practices

### 1. Screen Organization
- Keep screen-specific code in the screen's folder
- If a component/hook/type is used by multiple screens, move it to `src/`
- Use descriptive folder names matching the screen name

### 2. Component Organization
- **Screen components** (`app/*/components/`): Used only by that screen
- **Shared UI components** (`src/components/ui/`): Reusable UI elements
- **Layout components** (`src/components/layout/`): Layout wrappers

### 3. Hooks
- Screen-specific hooks: `app/*/hooks/`
- Shared hooks: `src/hooks/`
- Export hooks through `index.ts` files for cleaner imports

### 4. Types
- Screen-specific types: `app/*/types/`
- Shared types: `src/types/`
- Use `index.ts` for type exports

### 5. Services
- API calls: `src/services/api/`
- Storage operations: `src/services/storage/`
- Business logic that doesn't belong to a specific screen

### 6. Constants & Config
- App-wide constants: `src/constants/`
- Environment/config: `src/config/`
- Theme values: `src/theme/`

## Import Examples

```typescript
// Screen-specific imports
import { LoginForm } from './components/LoginForm';
import { useLogin } from './hooks/useLogin';
import type { LoginFormData } from './types';

// Shared imports
import { Button } from '@/src/components/ui';
import { useAuth } from '@/src/hooks';
import type { User } from '@/src/types';
import { apiClient } from '@/src/services/api';
```

## Adding New Screens

1. Create a new folder under `app/` (or in a route group like `(auth)` or `(tabs)`)
2. Create `components/`, `hooks/`, and `types/` subfolders
3. Create `index.tsx` as the main screen component
4. Add screen-specific code in respective folders
5. Move shared code to `src/` when needed

## Notes

- Use route groups `(auth)`, `(tabs)` for organizing related screens
- Keep components small and focused
- Use TypeScript for type safety
- Export through `index.ts` files for cleaner imports
- Follow the single responsibility principle

