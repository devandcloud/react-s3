import { motion } from "framer-motion";
import {
  ServerIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  CogIcon,
  CloudIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import SEO from "../../components/seo/SEO";

const services = [
  {
    name: "S3 Hosting",
    description:
      "Secure and highly available storage for your React applications with Amazon S3.",
    icon: ServerIcon,
    features: [
      "High durability storage (99.999999999%)",
      "99.99% availability",
      "Data encryption at rest",
      "File versioning",
    ],
  },
  {
    name: "CDN Distribution",
    description: "Speed up your site with global distribution via CloudFront.",
    icon: CloudIcon,
    features: [
      "Global network of edge locations",
      "Performance acceleration",
      "HTTPS by default",
      "Smart caching",
    ],
  },
  {
    name: "Advanced Security",
    description:
      "Protect your application with our advanced security configurations.",
    icon: ShieldCheckIcon,
    features: [
      "Free SSL/TLS certificates",
      "DDoS protection",
      "Strict security policies",
      "Granular access control",
    ],
  },
  {
    name: "Auto Scaling",
    description: "Handle traffic spikes with our elastic infrastructure.",
    icon: ChartBarIcon,
    features: [
      "Automatic scaling",
      "Load balancing",
      "Performance monitoring",
      "Detailed reports",
    ],
  },
  {
    name: "Continuous Deployment",
    description: "Automate your deployments with our CI/CD pipelines.",
    icon: LightBulbIcon,
    features: [
      "GitHub/GitLab integration",
      "Zero-downtime deployments",
      "One-click rollback",
      "Multiple environments",
    ],
  },
  {
    name: "Technical Support",
    description: "Our team of experts is here to help you 24/7.",
    icon: CogIcon,
    features: [
      "Priority support",
      "24/7 technical assistance",
      "Guaranteed response time",
      "AWS certified experts",
    ],
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "0",
    description: "Perfect for small projects and testing",
    features: [
      "Up to 10,000 requests/month",
      "5GB bandwidth/month",
      "Email support",
      "99% SLA",
      "1 deployment environment",
    ],
    cta: "Get Started for Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "29",
    description: "Ideal for growing startups",
    features: [
      "Up to 100,000 requests/month",
      "50GB bandwidth/month",
      "Priority support",
      "99.9% SLA",
      "3 deployment environments",
      "Performance monitoring",
    ],
    cta: "Choose Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For businesses with specific needs",
    features: [
      "Unlimited volume",
      "Unlimited bandwidth",
      "24/7 support with dedicated engineer",
      "99.99% SLA",
      "Unlimited environments",
      "Advanced security",
    ],
    cta: "Contact Us",
    popular: false,
  },
];

const Services = () => {
  return (
    <>
      <SEO
        title="React S3 Hosting Services - AWS Cloud Solutions"
        description="Professional React application hosting on AWS S3 with CloudFront CDN. Our services include automated deployments, SSL, and global content delivery."
        keywords="React hosting, S3 deployment, AWS CloudFront, CDN, static site hosting, SSL certificate, CI/CD, web performance"
        ogType="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Web Hosting",
          provider: {
            "@type": "Organization",
            name: "React S3 Hosting",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Hosting Services",
            itemListElement: [
              {
                "@type": "Service",
                name: "S3 Hosting",
                description:
                  "Secure and scalable S3 hosting for React applications",
              },
              {
                "@type": "Service",
                name: "CDN Distribution",
                description:
                  "Global content delivery network for fast loading times",
              },
              {
                "@type": "Service",
                name: "SSL Certificates",
                description:
                  "Free SSL certificates for secure HTTPS connections",
              },
            ],
          },
        }}
      />
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
                Our <span className="text-gradient">Services</span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Discover how we can help you deploy and manage your React
                application on AWS S3 with ease and efficiency.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
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
                Our Pricing
              </motion.h2>
              <motion.p
                className="text-lg text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Choose the plan that best fits your needs. No hidden fees, no
                surprises.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  className={`relative rounded-2xl p-8 ${
                    plan.popular
                      ? "bg-white shadow-2xl border-2 border-primary-500"
                      : "bg-white border border-gray-200"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  <div className="mb-8">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price === "0"
                        ? "Free"
                        : plan.price === "Custom"
                          ? "Custom"
                          : `$${plan.price}`}
                    </span>
                    {plan.price !== "0" && plan.price !== "Custom" && (
                      <span className="text-gray-500">/month</span>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-colors duration-200 ${
                      plan.popular
                        ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-gray-600 mb-6">
                Do you have specific needs? Our team is here to help you.
              </p>
              <button className="btn btn-secondary px-8 py-3">
                Contact Us
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
                Ready to deploy your React application?
              </motion.h2>
              <motion.p
                className="text-xl mb-10 text-primary-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Join thousands of developers who trust our solution to host
                their React applications on AWS S3.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button className="bg-white text-primary-700 hover:bg-gray-100 px-8 py-4 rounded-xl font-medium text-lg transition-colors duration-200">
                  Get Started for Free
                </button>
                <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-medium text-lg transition-colors duration-200">
                  View Documentation
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Services;
