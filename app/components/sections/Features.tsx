import { motion } from "framer-motion";
import {
  LightBulbIcon,
  CloudArrowUpIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  CodeBracketIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Instant Deployment",
    description:
      "Deploy your React app in seconds with optimized configuration for AWS S3 and CloudFront.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "High Performance",
    description:
      "Enjoy ultra-fast loading times thanks to global distribution via AWS CloudFront CDN.",
    icon: LightBulbIcon,
  },
  {
    name: "Enhanced Security",
    description:
      "Built-in DDoS protection, HTTPS by default, and strict security policies for your data.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Auto Scaling",
    description:
      "Easily handle traffic spikes with infrastructure that automatically adapts to your load.",
    icon: ChartBarIcon,
  },
  {
    name: "CI/CD Integration",
    description:
      "Automate your deployments with GitHub Actions, GitLab CI, or other CI/CD tools.",
    icon: CodeBracketIcon,
  },
  {
    name: "Global Availability",
    description:
      "Be accessible worldwide with minimal latency thanks to AWS's global network of edge locations.",
    icon: GlobeAltIcon,
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="heading-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Everything you need to deploy successfully
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A complete solution to host and deploy your React applications on
            AWS S3 with performance and security optimized configuration.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.name}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Prêt à déployer votre application ?
            </h3>
            <p className="text-gray-700 mb-8">
              Rejoignez des milliers de développeurs qui font confiance à notre
              solution pour héberger leurs applications React sur AWS S3.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:shadow-primary-500/20 transition-all duration-200"
              >
                Commencer gratuitement
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-white text-gray-800 font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-all duration-200"
              >
                Voir la documentation
              </motion.button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary-100 opacity-30"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-secondary-100 opacity-30"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
