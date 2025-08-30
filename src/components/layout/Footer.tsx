import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">React S3 Demo</h3>
            <p className="text-gray-400">Une démonstration de déploiement sur AWS S3</p>
          </div>
          <div className="flex space-x-6">
            <Link to="/" className="text-gray-300 hover:text-white">Accueil</Link>
            <Link to="/services" className="text-gray-300 hover:text-white">Services</Link>
            <a 
              href="https://github.com/yourusername/react-s3-demo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} React S3 Demo. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
