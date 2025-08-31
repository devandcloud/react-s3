import { motion } from 'framer-motion';
import Hero from '../../components/sections/Hero';
import Features from '../../components/sections/Features';

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />
      <Features />
      
      {/* Additional sections can be added here */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="heading-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Prêt à déployer votre application React sur AWS S3 ?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Commencez gratuitement dès aujourd'hui et déployez votre première application en quelques minutes.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <button className="btn btn-primary px-8 py-4 text-lg">
                Commencer maintenant - C'est gratuit
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
