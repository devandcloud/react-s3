# React S3 Deployment Boilerplate

This is a modern React TypeScript application built with Vite, optimized for deployment on AWS S3 with CloudFront. It includes a complete configuration for both development and production, featuring a responsive design built with Tailwind CSS and smooth animations using Framer Motion.

## 🚀 Features

- ⚡ **Blazing Fast** - Built with Vite for lightning-fast development and production builds
- 🎨 **Modern UI** - Beautiful, responsive design with Tailwind CSS
- ✨ **Smooth Animations** - Powered by Framer Motion
- 🔄 **Client-Side Routing** - Using React Router v6
- 🛠 **Type-Safe** - Full TypeScript support
- 🧪 **Testing** - Set up with Vitest and React Testing Library
- 🚀 **Optimized for Production** - Ready for deployment to AWS S3 + CloudFront

## 🛠️ Tech Stack

- ⚛️ [React 19](https://reactjs.org/) with TypeScript
- 🎨 [Tailwind CSS](https://tailwindcss.com/) with official plugins
- ⚡ [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- 🎭 [Framer Motion](https://www.framer.com/motion/) - Animation library
- 🔄 [React Router v6](https://reactrouter.com/) - Client-side routing
- 🧪 [Vitest](https://vitest.dev/) - Testing framework
- ☁️ AWS S3 + CloudFront - Deployment

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or higher
- pnpm 8 or higher
- An AWS account (for deployment)

### 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/react-s3.git
   cd react-s3
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Open in your browser**
   The app will be available at [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
react-s3/
├── app/                    # Main application code
│   ├── components/         # Reusable UI components
│   ├── pages/              # Page components
│   ├── assets/             # Static assets (images, fonts, etc.)
│   ├── styles/             # Global styles and Tailwind configuration
│   ├── utils/              # Utility functions and helpers
│   ├── App.tsx             # Main application component
│   └── main.tsx            # Application entry point
├── public/                 # Static files
│   └── index.html          # Main HTML file
├── .github/                # GitHub workflows and templates
├── .vscode/                # VSCode settings
├── node_modules/           # Dependencies
├── .eslintrc.js            # ESLint configuration
├── .gitignore             # Git ignore file
├── index.html              # Vite entry point (points to public/index.html)
├── package.json            # Project dependencies and scripts
├── postcss.config.mjs      # PostCSS configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── tsconfig.node.json      # TypeScript configuration for Node
└── vite.config.mjs         # Vite configuration
```

## 🛠️ Available Commands

- `pnpm dev` - Start the development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview the production build locally
- `pnpm test` - Run tests
- `pnpm test:watch` - Run tests in watch mode
- `pnpm test:coverage` - Generate test coverage report
- `pnpm lint` - Lint your code
- `pnpm format` - Format code with Prettier

## 🏗️ Building for Production

To create an optimized production build:

```bash
pnpm build
```

This will create a production-ready build in the `dist/` directory, which is ready to be deployed to AWS S3.

## ☁️ Deploying to AWS S3

1. **Configure AWS CLI**:
   ```bash
   aws configure
   ```
   Enter your AWS access keys (created from IAM console).

2. **Create an S3 bucket**:
   ```bash
   aws s3 mb s3://your-bucket-name --region your-region
   ```

3. **Enable static website hosting**:
   ```bash
   aws s3 website s3://your-bucket-name/ --index-document index.html --error-document index.html
   ```

4. **Configure bucket permissions**:
   Create a `bucket-policy.json` file:
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::your-bucket-name/*"
       }
     ]
   }
   ```
   Then apply the policy:
   ```bash
   aws s3api put-bucket-policy --bucket your-bucket-name --policy file://bucket-policy.json
   ```

5. **Deploy the application**:
   ```bash
   pnpm build
   aws s3 sync dist/ s3://your-bucket-name --delete
   ```

6. **Set up CloudFront (recommended)**:
   - Create a CloudFront distribution pointing to your S3 bucket
   - Configure custom domain and SSL certificate
   - Set up proper cache invalidation

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more information.

## ✨ Author

- **Your Name** - [@choksel](https://github.com/choksel)

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.
