# Tawanda Gweshe Portfolio

## 📸 Adding Your Profile Picture

To add your profile picture to the portfolio:

### Option 1: Replace the placeholder image
1. Save your professional photo as `profile.jpg`
2. Place it in the `public/images/` directory
3. Update the image source in `components/profile-section.tsx`:
   \`\`\`tsx
   src="/images/profile.jpg"
   \`\`\`

### Option 2: Use an external URL
1. Upload your photo to a service like Cloudinary, Imgur, or GitHub
2. Replace the placeholder URL in `components/profile-section.tsx`:
   \`\`\`tsx
   src="https://your-image-url.com/profile.jpg"
   \`\`\`

### Recommended Image Specifications:
- **Size**: 400x400px or larger (square aspect ratio)
- **Format**: JPG, PNG, or WebP
- **Quality**: High resolution for crisp display
- **Style**: Professional headshot with good lighting

## 🎨 New Animations

The portfolio now features:
- **Matrix Rain Effect**: Falling code characters in the background
- **Floating Geometric Shapes**: Animated shapes that float around
- **Interactive Gradient Orb**: Follows your mouse movement
- **Animated Grid**: Moving grid pattern
- **Slide-in Text**: Name slides in from left and right
- **Bounce-in Social Icons**: Social media icons bounce in with stagger

## 🚀 Navigation Structure

The portfolio now uses proper Next.js routing:
- `/` - Home page with hero section
- `/projects` - Projects showcase page
- `/about` - About me page with profile picture
- `/skills` - Skills and expertise page
- `/contact` - Contact form and information

## 📱 Features

- ✅ Separate routes for each section
- ✅ Active navigation highlighting
- ✅ New matrix-style animations
- ✅ Profile picture section
- ✅ Responsive design
- ✅ Smooth transitions
- ✅ Professional layout
