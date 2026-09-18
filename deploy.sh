 #!/bin/bash

# MEVEST GitHub Pages Deployment Script
# This script builds and deploys the project to GitHub Pages

set -e  # Exit on error

echo "🚀 MEVEST GitHub Pages Deployment"
echo "=================================="
echo ""

# Check if we're in the right directory
if [ ! -f "frontend/package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

cd frontend

# Step 1: Install dependencies
echo "📦 Installing dependencies..."
npm install --silent

# Step 2: Build for GitHub Pages
echo "🔨 Building for GitHub Pages..."
npm run build:github-pages

# Step 3: Check if gh-pages is installed
if ! command -v gh-pages &> /dev/null; then
    echo "📥 Installing gh-pages package..."
    npm install --save-dev gh-pages
fi

# Step 4: Deploy to GitHub Pages
echo "🌐 Deploying to GitHub Pages..."
npx gh-pages -d dist-github --repo https://github.com/Jack-ki1/MEVEST.git --branch gh-pages --message "Deploy to GitHub Pages - $(date)"

echo ""
echo "✅ Deployment complete!"
echo "📍 Your site will be live at: https://jack-ki1.github.io/MEVEST/"
echo "⏱️  It may take 2-5 minutes for changes to propagate"
echo ""
echo "💡 Tips:"
echo "   - Check deployment status: https://github.com/Jack-ki1/MEVEST/actions"
echo "   - Clear browser cache if you don't see updates"
echo "   - The demo version uses mock data (no backend required)"
