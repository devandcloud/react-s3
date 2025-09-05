import { motion } from "framer-motion";
import SEO from "../../components/seo/SEO";
import Hero from "../../components/sections/Hero";
import Features from "../../components/sections/Features";

const Home = () => {
  return (
    <>
      <SEO
        title="Deploy React Apps on AWS S3 - Fast & Secure Hosting"
        description="Deploy your React applications to AWS S3 with zero configuration. Get fast, secure, and scalable hosting with global CDN distribution."
        keywords="React, S3, AWS, Deployment, Hosting, Static Site, CDN, CloudFront, Web Hosting"
        ogType="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "React S3 Hosting",
          url: "https://react-s3-demo.com",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://react-s3-demo.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }}
      />
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
                Ready to deploy your React app on AWS S3?
              </motion.h2>
              <motion.p
                className="text-xl text-gray-600 mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Get started for free today and deploy your first app in just a
                few minutes.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <button className="btn btn-primary px-8 py-4 text-lg">
                  {`Get Started Now - It's Free`}
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Home;
