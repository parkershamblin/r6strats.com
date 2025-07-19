# R6Strats - Rainbow Six Siege Strategy Guide

A comprehensive web application that helps Rainbow Six Siege players discover the best gadget placements, operator strategies, and tactical positions for every map and site in the game.

## 🎯 Features

- **Operator Selection**: Choose from all Rainbow Six Siege operators (attackers and defenders)
- **Map & Site Selection**: Browse through all maps and their bomb sites
- **Strategy Builder**: Interactive tool to build custom strategies
- **Visual Guides**: Detailed placement guides with images and descriptions
- **Gadget Views**: See exactly what each gadget sees from its placement
- **Tips & Recommendations**: Best practices and counter strategies
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd r6strats
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see the application

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
r6strats/
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx      # Navigation header
│   │   ├── Home.jsx        # Landing page
│   │   ├── StrategyBuilder.jsx  # Strategy selection tool
│   │   └── StrategyViewer.jsx   # Strategy display
│   ├── data/               # Game data
│   │   ├── operators.js    # Operator database
│   │   └── maps.js         # Map and site database
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md               # This file
```

## 🎮 How to Use

### 1. Home Page
- Overview of the application
- Quick access to strategy builder
- Statistics and features

### 2. Strategy Builder
- **Step 1**: Select an operator (filter by role or search)
- **Step 2**: Choose a map
- **Step 3**: Select a bomb site
- **Step 4**: View detailed strategies

### 3. Strategy Viewer
- Detailed gadget placement information
- Visual guides and descriptions
- Tips and counter strategies
- Related operator recommendations

## 🎨 Design System

The application uses a custom design system inspired by Rainbow Six Siege:

- **Colors**:
  - Primary Blue: `#1e3a8a` (R6 Blue)
  - Accent Orange: `#ea580c` (R6 Orange)
  - Dark Theme: `#111827` (R6 Dark)
  - Gray Scale: Various shades for UI elements

- **Typography**: Inter font family
- **Components**: Custom Tailwind CSS classes
- **Animations**: Smooth transitions and hover effects

## 📊 Data Structure

### Operators
Each operator contains:
- Basic info (name, role, icon, gadget)
- Detailed strategies for each map/site combination
- Placement descriptions and visual references

### Maps
Each map contains:
- Basic info (name, description, image)
- Bomb sites with difficulty ratings
- Best operator recommendations per site

### Strategies
Each strategy includes:
- Placement location
- Detailed description
- Gadget view information
- Image references

## 🔧 Customization

### Adding New Operators
1. Edit `src/data/operators.js`
2. Add operator data following the existing structure
3. Include strategies for relevant maps and sites

### Adding New Maps
1. Edit `src/data/maps.js`
2. Add map data with sites and descriptions
3. Update operator strategies to include the new map

### Styling Changes
- Modify `src/index.css` for global styles
- Update `tailwind.config.js` for theme customization
- Edit component-specific styles in individual files

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Connect your repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with default settings

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Rainbow Six Siege community for strategy insights
- Ubisoft for creating an amazing game
- All contributors and testers

## 📞 Support

If you have any questions or need help:
- Create an issue on GitHub
- Check the documentation
- Join our community discussions

---

**Happy strategizing! 🎯** 