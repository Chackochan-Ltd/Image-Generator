# UltraHD Imagen Generator

A React-based web application for generating high-quality images using Google's Gemini 2.0 Flash API. This application provides a beautiful interface for creating stunning, detailed images from textual descriptions.

## Features

- 🎨 Generate high-quality images from text prompts using Gemini 2.0 Flash
- 💬 Review and note functionality for iterative improvements
- 🎭 Beautiful gradient UI with modern design
- ⚡ Fast and responsive React application
- 🔄 Real-time loading states and error handling
- 📱 Mobile-responsive design

## Prerequisites

- Node.js 18+ 
- npm or yarn
- Google Gemini API key ([Get one here](https://aistudio.google.com/app/apikey))

## Getting Started

### 1. Clone and Install

```bash
git clone <repository-url>
cd ultrahd-imagen-generator
npm install
```

### 2. Environment Setup

Copy the environment example file:

```bash
cp .env.example .env
```

Edit the `.env` file and add your Gemini API key:

```env
GEMINI_API_KEY=your_actual_api_key_here
API_KEY=your_actual_api_key_here
```

### 3. Development

Start the development server:

```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

### 4. Production Build

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## How to Use

1. **Enter a Prompt**: Describe the image you want to generate in the text area
2. **Generate**: Click "Generate Image" to create your image
3. **Review**: Use the review notes section to plan improvements for future iterations
4. **Download**: Right-click on generated images to save them

## Technologies Used

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling via CDN
- **Google Gemini 2.0 Flash** - AI image generation

## API Configuration

The application uses the new Google GenAI SDK with the following configuration:

- **Model**: `gemini-2.0-flash-exp`
- **Response Modalities**: Text and Image
- **Output Format**: Base64 encoded images with data URL scheme

## Recent Fixes Applied

This repository has been updated to resolve several deployment issues:

### ✅ Fixed Issues

1. **HTML Structure**: Removed duplicate script tags and malformed HTML
2. **Dependencies**: Added missing React TypeScript definitions
3. **Vite Configuration**: Updated to include React plugin and proper build settings
4. **Gemini API Integration**: Updated to use the correct new SDK methods
5. **Environment Variables**: Proper configuration for API keys
6. **CSS Dependencies**: Created missing CSS file

### 🛠 Technical Improvements

- Updated to use `@google/genai` SDK with correct API methods
- Fixed TypeScript compilation issues
- Improved error handling and user feedback
- Added proper environment variable support
- Enhanced build configuration for production deployment

## Deployment Ready

This application is now fully ready for deployment on platforms like:

- **Vercel** - Zero-config deployment
- **Netlify** - Static site hosting
- **Docker** - Containerized deployment
- **Traditional hosting** - Any static file server

## Environment Variables

Make sure to set these environment variables in your deployment platform:

```env
GEMINI_API_KEY=your_actual_api_key_here
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues or questions:

1. Check the [Gemini API documentation](https://ai.google.dev/gemini-api/docs)
2. Review environment variable configuration
3. Ensure API key has proper permissions
4. Check browser console for detailed error messages

---

**Note**: This application requires a valid Google Gemini API key to function. The API key should be kept secure and not committed to version control.
