# Quick Start Guide

## File Structure Overview

Your app now follows a **production-ready, screen-based architecture**:

### Screen Structure
Each screen has its own folder with:
- `components/` - Screen-specific components
- `hooks/` - Screen-specific custom hooks
- `types/` - Screen-specific TypeScript types
- `index.tsx` - Main screen component

### Shared Code
All shared code lives in `src/`:
- `components/ui/` - Reusable UI components (Button, Input, etc.)
- `components/layout/` - Layout components (Header, Container, etc.)
- `hooks/` - Shared custom hooks
- `types/` - Shared TypeScript types
- `utils/` - Utility functions
- `services/api/` - API clients and endpoints
- `services/storage/` - Storage services
- `constants/` - App constants
- `theme/` - Theme configuration
- `config/` - App configuration
- `lib/` - Third-party library wrappers

## Example Screens Created

1. **Login Screen** (`app/(auth)/login/`)
2. **Register Screen** (`app/(auth)/register/`)
3. **Home Screen** (`app/(tabs)/home/`)
4. **Profile Screen** (`app/(tabs)/profile/`)

## How to Add a New Screen

1. Create a folder under `app/`:
   ```
   app/your-screen/
   ├── components/
   ├── hooks/
   ├── types/
   └── index.tsx
   ```

2. Create the main screen component in `index.tsx`:
   ```tsx
   import { View, Text } from 'react-native';
   import { YourComponent } from './components/YourComponent';
   import { useYourHook } from './hooks/useYourHook';
   import type { YourType } from './types';

   export default function YourScreen() {
     const { data } = useYourHook();
     return (
       <View>
         <YourComponent data={data} />
       </View>
     );
   }
   ```

3. Add screen-specific code in respective folders

4. If code is shared across screens, move it to `src/`

## Import Examples

```tsx
// Screen-specific imports (relative)
import { LoginForm } from './components/LoginForm';
import { useLogin } from './hooks/useLogin';
import type { LoginFormData } from './types';

// Shared imports (using path alias)
import { Button } from '@/src/components/ui';
import { useAuth } from '@/src/hooks';
import type { User } from '@/src/types';
import { apiClient } from '@/src/services/api';
```

## Best Practices

✅ **DO:**
- Keep screen-specific code in the screen's folder
- Move shared code to `src/` when used by multiple screens
- Use TypeScript types for all props and data
- Export through `index.ts` files for cleaner imports
- Keep components small and focused

❌ **DON'T:**
- Put shared code in screen folders
- Create deeply nested component structures
- Mix business logic with UI components
- Skip TypeScript types

## Next Steps

1. Start building your screens using the example structure
2. Create shared UI components in `src/components/ui/`
3. Set up your API service in `src/services/api/`
4. Configure your theme in `src/theme/`
5. Add constants in `src/constants/`

For detailed documentation, see `STRUCTURE.md`.

