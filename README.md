# Tic-Tac-Toe

A modern, fully-tested Tic-Tac-Toe game built with React, TypeScript, and Vite. Features a clean component architecture, comprehensive test coverage, and a delightful confetti celebration when someone wins!

## 🎮 Play Online

**[Play the game here →](https://danielsalinasmerino.github.io/tic-tac-toe/)**

The game is automatically deployed to GitHub Pages on every push to the main branch.

## Features

- 🎮 **Classic Tic-Tac-Toe Gameplay** - Two players take turns placing X's and O's
- 🎉 **Winner Celebration** - Confetti animation when a player wins
- 🔄 **Reset Functionality** - Start a new game instantly
- ✅ **Full Test Coverage** - Comprehensive test suites for all components and utilities
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile
- ♿ **Accessible** - Proper ARIA labels and keyboard navigation
- 🎨 **CSS Modules** - Scoped, maintainable styling

## Tech Stack

- **React 19.2** - Modern functional components with hooks
- **TypeScript 5.9** - Type-safe development
- **Vite 7.2** - Lightning-fast build tool and dev server
- **Vitest 4.0** - Unit testing framework
- **Testing Library** - Component testing utilities
- **Canvas Confetti** - Victory celebration effects
- **CSS Modules** - Component-scoped styling

## Project Structure

```
src/
├── components/         # React components
│   ├── Board/         # Main game board
│   ├── Square/        # Individual game square
│   ├── GameStatus/    # Status message display
│   └── PlayAgainButton/ # Reset button
├── hooks/             # Custom React hooks
│   └── useWinnerConfetti.ts
├── utils/             # Game logic utilities
│   ├── checkGameResult/    # Win/draw detection
│   ├── convertToBoard/     # Board conversion
│   └── getGameResultMessage/ # Result messaging
├── types/             # TypeScript type definitions
│   ├── Board.ts
│   ├── CellValue.ts
│   └── GameResult.ts
└── constants/         # Centralized constants
    └── text.ts        # UI text strings
```

## Getting Started

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

### Testing

Run all tests:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Run tests with UI:

```bash
npm run test:ui
```

Generate coverage report:

```bash
npm run test:coverage
```

### Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Live Site

The game is deployed at: **https://danielsalinasmerino.github.io/tic-tac-toe/**

### Automatic Deployment

Every push to the `main` branch triggers an automatic deployment:

1. GitHub Actions workflow builds the project
2. Tests run to ensure code quality
3. Built files are deployed to GitHub Pages
4. Site updates within minutes

### Manual Deployment

You can also deploy manually using:

```bash
npm run deploy
```

### Deployment Configuration

- **Workflow**: [.github/workflows/deploy.yml](.github/workflows/deploy.yml)
- **Base URL**: Configured in [vite.config.ts](vite.config.ts) as `/tic-tac-toe/`
- **Build Output**: `dist/` directory

## Game Logic

The game implements standard Tic-Tac-Toe rules:

1. Players alternate between X and O
2. Win by getting three in a row (horizontally, vertically, or diagonally)
3. Game ends in a draw if the board fills with no winner
4. No moves allowed after game ends

All game logic is thoroughly tested with utilities for:

- **checkGameResult** - Detects wins, draws, and ongoing games
- **convertToBoard** - Transforms flat arrays to 3x3 boards
- **getGameResultMessage** - Generates user-friendly status messages

## Architecture Highlights

- **Single Responsibility Principle** - Each component and utility has one clear purpose
- **Type Safety** - Full TypeScript coverage with strict typing
- **Component Composition** - Small, reusable components
- **Custom Hooks** - Encapsulated logic (e.g., `useWinnerConfetti`)
- **CSS Modules** - Isolated, maintainable styles
- **Centralized Constants** - All UI text in one location for easy updates

## Testing Strategy

- **Unit Tests** - All utilities have dedicated test suites
- **Component Tests** - Every component tested in isolation
- **Integration Tests** - Board component tests full game flows
- **Test Coverage** - Comprehensive coverage of all game scenarios

## License

MIT
