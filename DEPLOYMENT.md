# Deployment Guide

This guide covers deploying the UltraHD Imagen Generator to various platforms.

## ✅ Pre-Deployment Checklist

- [x] All dependencies installed and up to date
- [x] Build process working (`npm run build` succeeds)
- [x] Environment variables configured
- [x] API integration tested
- [x] TypeScript compilation successful
- [x] Production build optimized

## 🚀 Platform-Specific Deployment

### Vercel (Recommended)

1. **Connect Repository**:
   ```bash
   # Install Vercel CLI (optional)
   npm i -g vercel
   
   # Deploy
   vercel
   ```

2. **Environment Variables**:
   - Go to your Vercel dashboard
   - Navigate to Project → Settings → Environment Variables
   - Add: `GEMINI_API_KEY` with your API key value

3. **Build Settings** (Auto-detected):
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

### Netlify

1. **Deploy via Git**:
   - Connect your repository on Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`

2. **Environment Variables**:
   - Go to Site Settings → Environment Variables
   - Add: `GEMINI_API_KEY` with your API key value

3. **Build Settings**:
   ```toml
   # netlify.toml
   [build]
     command = "npm run build"
     publish = "dist"
   ```

### Docker Deployment

1. **Build Docker Image**:
   ```bash
   docker build -t ultrahd-imagen-generator .
   ```

2. **Run Container**:
   ```bash
   docker run -p 3000:3000 -e GEMINI_API_KEY=your_api_key ultrahd-imagen-generator
   ```

### Traditional Hosting

1. **Build for Production**:
   ```bash
   npm run build
   ```

2. **Upload Contents**:
   - Upload the entire `dist/` folder to your web server
   - Ensure your server serves `index.html` for SPA routing

3. **Server Configuration**:
   - Configure environment variables on your server
   - Ensure HTTPS is enabled for API calls

## 🔧 Environment Configuration

### Required Environment Variables

```env
# Required: Your Gemini API Key
GEMINI_API_KEY=your_actual_api_key_here

# Alternative name (for compatibility)
API_KEY=your_actual_api_key_here
```

### Getting Your API Key

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Create a new API key
3. Copy the key value
4. Add it to your deployment platform's environment variables

## 🛠 Troubleshooting

### Common Issues

1. **Build Fails**:
   - Check Node.js version (18+ required)
   - Run `npm install` to ensure dependencies
   - Check for TypeScript errors

2. **API Errors**:
   - Verify API key is correctly set
   - Check API key permissions
   - Ensure environment variable name matches

3. **Deployment Issues**:
   - Verify build output directory is `dist`
   - Check that environment variables are set
   - Ensure build command is `npm run build`

### Debug Steps

1. **Local Testing**:
   ```bash
   npm run build
   npm run preview
   ```

2. **Check Environment**:
   ```bash
   echo $GEMINI_API_KEY
   ```

3. **Verify Build**:
   ```bash
   ls -la dist/
   ```

## 🔒 Security Considerations

1. **API Key Security**:
   - Never commit API keys to version control
   - Use environment variables for all deployments
   - Rotate keys regularly

2. **HTTPS**:
   - Always deploy with HTTPS enabled
   - Most platforms provide this automatically

3. **CORS**:
   - The Gemini API handles CORS for web applications
   - No additional configuration needed

## 📊 Performance Optimization

1. **Build Optimization**:
   - Vite automatically chunks vendors
   - Gzip compression enabled
   - Source maps available for debugging

2. **Runtime Optimization**:
   - React 19 concurrent features
   - Lazy loading for components
   - Optimized image handling

## 🎯 Post-Deployment

1. **Test Functionality**:
   - Generate a test image
   - Verify error handling
   - Check responsive design

2. **Monitor Performance**:
   - Check loading times
   - Monitor API usage
   - Set up error tracking

3. **Analytics** (Optional):
   - Add Google Analytics
   - Monitor user interactions
   - Track conversion rates

---

## ✅ Deployment Complete

Your UltraHD Imagen Generator is now live and ready to generate stunning images! 

### Support

For deployment issues:
1. Check the troubleshooting section above
2. Review platform-specific documentation
3. Verify API key configuration
4. Test with a minimal example first