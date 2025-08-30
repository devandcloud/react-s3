import { motion } from 'framer-motion';
import { 
  ServerIcon, 
  LightBulbIcon, 
  ShieldCheckIcon, 
  CogIcon,
  CloudIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Hébergement sur S3',
    description: 'Stockage sécurisé et haute disponibilité pour vos applications React avec Amazon S3.',
    icon: ServerIcon,
    features: [
      'Stockage haute durabilité (99.999999999%)',
      'Disponibilité de 99.99%',
      'Chiffrement des données au repos',
      'Versioning des fichiers'
    ]
  },
  {
    name: 'Distribution CDN',
    description: 'Accélérez votre site avec la distribution mondiale via CloudFront.',
    icon: CloudIcon,
    features: [
      'Réseau mondial de points de présence',
      'Accélération des performances',
      'HTTPS par défaut',
      'Cache intelligent'
    ]
  },
  {
    name: 'Sécurité avancée',
    description: 'Protégez votre application avec nos configurations de sécurité avancées.',
    icon: ShieldCheckIcon,
    features: [
      'Certificats SSL/TLS gratuits',
      'Protection DDoS',
      'Politiques de sécurité strictes',
      'Contrôle d\'accès granulaire'
    ]
  },
  {
    name: 'Mise à l\'échelle automatique',
    description: 'Gérez les pics de trafic sans souci avec notre infrastructure élastique.',
    icon: ChartBarIcon,
    features: [
      'Mise à l\'échelle automatique',
      'Équilibrage de charge',
      'Surveillance des performances',
      'Rapports détaillés'
    ]
  },
  {
    name: 'Déploiement continu',
    description: 'Automatisez vos déploiements avec nos pipelines CI/CD.',
    icon: LightBulbIcon,
    features: [
      'Intégration avec GitHub/GitLab',
      'Déploiements sans temps d\'arrêt',
      'Rollback en un clic',
      'Environnements multiples'
    ]
  },
  {
    name: 'Support technique',
    description: 'Notre équipe d\'experts est là pour vous aider 24/7.',
    icon: CogIcon,
    features: [
      'Support prioritaire',
      'Assistance technique 24/7',
      'Temps de réponse garanti',
      'Experts AWS certifiés'
    ]
  }
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '0',
    description: 'Parfait pour les petits projets et tests',
    features: [
      'Jusqu\'à 10 000 requêtes/mois',
      '5 Go de bande passante/mois',
      'Support par email',
      'SLA 99%',
      '1 environnement de déploiement'
    ],
    cta: 'Commencer gratuitement',
    popular: false
  },
  {
    name: 'Pro',
    price: '29',
    description: 'Idéal pour les startups en croissance',
    features: [
      'Jusqu\'à 100 000 requêtes/mois',
      '50 Go de bande passante/mois',
      'Support prioritaire',
      'SLA 99.9%',
      '3 environnements de déploiement',
      'Analytiques avancées'
    ],
    cta: 'Essai gratuit de 14 jours',
    popular: true
  },
  {
    name: 'Entreprise',
    price: 'Personnalisé',
    description: 'Solution sur mesure pour les grandes entreprises',
    features: [
      'Volume illimité',
      'Bande passante illimitée',
      'Support 24/7',
      'SLA 99.99%',
      'Environnements illimités',
      'Dédié & personnalisé'
    ],
    cta: 'Contactez-nous',
    popular: false
  }
];

const Services = () => {
  return (
    <motion.div 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="heading-1 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Nos <span className="text-gradient">Services</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Découvrez comment nous pouvons vous aider à déployer et gérer votre application React sur AWS S3 avec facilité et efficacité.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="heading-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Des tarifs simples et transparents
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Choisissez le plan qui correspond le mieux à vos besoins. Pas de frais cachés, pas de mauvaises surprises.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`relative rounded-2xl p-8 ${plan.popular ? 'bg-white shadow-2xl border-2 border-primary-500' : 'bg-white border border-gray-200'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
                    Le plus populaire
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-8">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price === '0' ? 'Gratuit' : `$${plan.price}`}
                  </span>
                  {plan.price !== '0' && plan.price !== 'Personnalisé' && (
                    <span className="text-gray-500">/mois</span>
                  )}
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-colors duration-200 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">Vous avez des besoins spécifiques ? Notre équipe est là pour vous aider.</p>
            <button className="btn btn-secondary px-8 py-3">
              Contactez-nous
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Prêt à déployer votre application React ?
            </motion.h2>
            <motion.p 
              className="text-xl mb-10 text-primary-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Rejoignez des milliers de développeurs qui font confiance à notre solution pour héberger leurs applications React sur AWS S3.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-white text-primary-700 hover:bg-gray-100 px-8 py-4 rounded-xl font-medium text-lg transition-colors duration-200">
                Commencer gratuitement
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-medium text-lg transition-colors duration-200">
                Voir la documentation
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
