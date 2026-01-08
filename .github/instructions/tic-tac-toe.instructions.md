---
description: "Tic-Tac-Toe project-specific development guidelines"
applyTo: "**/*.tsx, **/*.ts, **/*.css, **/*.module.css"
---

# Tic-Tac-Toe Project Instructions

This is a Tic-Tac-Toe game built with modern web technologies. All development should follow the guidelines outlined in this document along with the referenced instruction files.

## Technology Stack

- **React**: Modern functional components with hooks
- **TypeScript**: Type-safe development with TypeScript 5.x
- **CSS Modules**: Scoped styling with CSS Modules for component isolation
- **Vite**: Fast build tool and development server

## Project Architecture

### Component Structure

- Use functional components with TypeScript
- Implement proper prop typing with TypeScript interfaces
- Keep components focused and single-purpose
- Use CSS Modules for component-specific styles

### Styling Guidelines

- **CSS Modules Only**: All component styles must use CSS Modules (`.module.css` extension)
- File naming: `ComponentName.module.css` paired with `ComponentName.tsx`
- Import styles as: `import styles from './ComponentName.module.css'`
- Apply classes using: `className={styles.className}`
- Use camelCase for class names in CSS Modules
- Implement responsive design with mobile-first approach
- Use CSS custom properties for theming and reusable values

### TypeScript Standards

- Follow all guidelines from `typescript-5-es2022.instructions.md`
- Use strict type checking
- Define interfaces for component props, state, and game logic
- Leverage TypeScript's type inference when appropriate
- Use proper typing for React hooks and event handlers

### React Patterns

- Follow all best practices from `reactjs.instructions.md`
- Use hooks for state management (`useState`, `useEffect`, `useMemo`, `useCallback`)
- Implement proper component composition
- Keep business logic separate from presentation
- Use custom hooks for reusable game logic

## Game-Specific Guidelines

### State Management

- Maintain game state at appropriate component levels
- Track board state, current player, winner, and game history
- Implement undo/redo functionality if needed
- Use immutable state updates

### Game Logic

- Implement clean, testable functions for game rules
- Separate win condition checking from rendering logic
- Handle edge cases (draws, invalid moves)
- Validate moves before state updates

### User Experience

- Provide clear visual feedback for game states
- Highlight winning combinations
- Show current player turn clearly
- Implement smooth transitions and animations
- Ensure accessibility with proper ARIA labels and keyboard navigation

## Code Organization

```
src/
  components/         # React components
    Board/           # Board component with .tsx and .module.css
    Square/          # Square component with .tsx and .module.css
    Game/            # Game container with .tsx and .module.css
  hooks/             # Custom React hooks
  utils/             # Utility functions (game logic, validators)
  types/             # TypeScript type definitions
  styles/            # Global styles and CSS variables
```

## Development Workflow

1. Create components with TypeScript interfaces for props
2. Implement component logic following React best practices
3. Style using CSS Modules with scoped class names
4. Test functionality thoroughly
5. Ensure accessibility compliance
6. Optimize performance where needed

## Referenced Instructions

- **React Development**: See `reactjs.instructions.md` for comprehensive React patterns and best practices
- **TypeScript Standards**: See `typescript-5-es2022.instructions.md` for TypeScript 5.x guidelines and ES2022 features

## Best Practices

- Write self-documenting code with clear variable and function names
- Keep functions small and focused on single responsibilities
- Use TypeScript's type system to prevent runtime errors
- Implement proper error boundaries for graceful error handling
- Write unit tests for game logic utilities
- Use React DevTools for debugging component behavior

## Performance Considerations

- Memoize expensive calculations with `useMemo`
- Use `React.memo` for components that render frequently
- Optimize re-renders by proper state placement
- Profile performance with React DevTools when needed
