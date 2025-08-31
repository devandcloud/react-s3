import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

const Services = () => {
  const services = [
    {
      title: 'Déploiement sur AWS S3',
      description: 'Mise en place complète de votre application React sur AWS S3 avec configuration optimisée pour les performances.',
      price: 'À partir de 299€',
      features: [
        'Configuration S3 et CloudFront',
        'Mise en place du HTTPS',
        'Redirection www vers domaine nu',
        'Cache et compression activés'
      ]
    },
    {
      title: 'Optimisation des performances',
      description: 'Améliorez les performances de chargement de votre application avec nos techniques avancées d\'optimisation.',
      price: 'À partir de 199€',
      features: [
        'Optimisation des images',
        'Code splitting',
        'Lazy loading',
        'Optimisation du bundle'
      ]
    },
    {
      title: 'Formation React & AWS',
      description: 'Formation personnalisée sur le développement React et le déploiement sur AWS pour votre équipe.',
      price: 'À partir de 499€/jour',
      features: [
        'Formation en présentiel ou distanciel',
        'Support personnalisé',
        'Documentation complète',
        'Accès à des ressources exclusives'
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Découvrez nos solutions complètes pour le développement et le déploiement d'applications React sur AWS S3.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="mb-6">
                      <span className="text-2xl font-bold text-primary">{service.price}</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full btn btn-primary">
                      En savoir plus
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Questions fréquentes</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: 'Combien de temps prend le déploiement sur AWS S3 ?',
                  answer: 'Le déploiement initial prend généralement moins d\'une heure une fois que nous avons accès à votre compte AWS. La propagation DNS peut prendre jusqu\'à 48 heures, mais est généralement beaucoup plus rapide.'
                },
                {
                  question: 'Quelle est la différence entre S3 et un hébergement traditionnel ?',
                  answer: 'AWS S3 est un service de stockage d\'objets qui peut servir des sites web statiques de manière très performante et économique. Contrairement à un hébergement traditionnel, il n\'y a pas de serveur à gérer, ce qui réduit les coûts et la maintenance.'
                },
                {
                  question: 'Puis-je utiliser un nom de domaine personnalisé ?',
                  answer: 'Absolument ! Nous pouvons configurer votre nom de domaine personnalisé avec des certificats SSL gratuits via AWS Certificate Manager pour une connexion sécurisée.'
                }
              ].map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Vous avez des questions ?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Notre équipe est là pour vous aider à trouver la solution qui correspond à vos besoins.
            </p>
            <a 
              href="mailto:contact@example.com" 
              className="btn btn-primary inline-block"
            >
              Nous contacter
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
