import { Link } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Bienvenue sur notre plateforme</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Découvrez comment déployer une application React sur AWS S3 avec une architecture optimisée pour les performances.
            </p>
            <div className="space-x-4">
              <Link 
                to="/services" 
                className="btn btn-primary inline-block bg-white text-primary hover:bg-gray-100"
              >
                Découvrir nos services
              </Link>
              <a 
                href="https://github.com/yourusername/react-s3-demo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn border-2 border-white text-white hover:bg-white hover:text-primary transition-colors inline-block"
              >
                Voir sur GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Pourquoi choisir notre solution ?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: '⚡',
                  title: 'Performance',
                  description: 'Chargement ultra-rapide grâce à la distribution globale avec AWS CloudFront.'
                },
                {
                  icon: '🛡️',
                  title: 'Sécurisé',
                  description: 'HTTPS activé et politiques de sécurité renforcées pour protéger vos données.'
                },
                {
                  icon: '📱',
                  title: 'Responsive',
                  description: 'Design parfaitement adapté à tous les appareils, du mobile au desktop.'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Prêt à commencer ?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Découvrez nos services et comment nous pouvons vous aider à déployer votre application React sur AWS S3.
            </p>
            <Link 
              to="/services" 
              className="btn btn-primary inline-block"
            >
              Voir nos services
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
