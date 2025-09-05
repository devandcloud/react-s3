import { motion } from "framer-motion";
import {
  BuildingOfficeIcon,
  UserGroupIcon,
  GlobeAltIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import SEO from "../../components/seo/SEO";

const About = () => {
  const stats = [
    {
      id: 1,
      name: "Projects Deployed",
      value: "1000+",
      icon: BuildingOfficeIcon,
    },
    { id: 2, name: "Satisfied Clients", value: "500+", icon: UserGroupIcon },
    { id: 3, name: "Countries Served", value: "50+", icon: GlobeAltIcon },
    { id: 4, name: "Open Source", value: "100%", icon: HeartIcon },
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=faces",
      bio: "10+ years of experience in cloud infrastructure and web development.",
    },
    {
      name: "Sarah Williams",
      role: "Lead Developer",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=faces",
      bio: "Full-stack developer with a passion for React and serverless architecture.",
    },
    {
      name: "Michael Chen",
      role: "DevOps Engineer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces",
      bio: "Specializes in AWS infrastructure and CI/CD pipelines.",
    },
  ];

  return (
    <>
      <SEO
        title="About React S3 - Our Story & Team"
        description="Learn about React S3's mission to simplify cloud deployment. Meet our team of experts dedicated to making React hosting fast, secure, and easy."
        keywords="about us, React S3 team, company history, cloud hosting mission, AWS experts, web development"
        ogType="profile"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "React S3",
          url: "https://react-s3-demo.com/about",
          logo: "https://react-s3-demo.com/logo.png",
          foundingDate: "2020",
          founders: [
            {
              "@type": "Person",
              name: "Alex Johnson",
            },
          ],
          address: {
            "@type": "PostalAddress",
            streetAddress: "123 Cloud Street",
            addressLocality: "San Francisco",
            addressRegion: "CA",
            postalCode: "94107",
            addressCountry: "US",
          },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            email: "contact@reacts3.com",
            url: "https://react-s3-demo.com/contact",
          },
          sameAs: [
            "https://twitter.com/reacts3",
            "https://github.com/react-s3",
            "https://www.linkedin.com/company/react-s3",
          ],
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
                About <span className="text-gradient">Us</span>
              </motion.h1>
              <motion.p
                className="text-xl text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {
                  "We're on a mission to simplify cloud deployment for developers and businesses worldwide."
                }
              </motion.p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  className="bg-gray-50 p-8 rounded-2xl text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
              >
                <h2 className="heading-2 mb-6">Our Story</h2>
                <p className="text-lg text-gray-600">
                  Founded in 2020, React S3 was born out of a simple idea:
                  making cloud deployment accessible to everyone. What started
                  as a side project quickly grew into a platform trusted by
                  thousands of developers worldwide.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 mb-6">
                    To empower developers and businesses to deploy their
                    applications quickly, securely, and cost-effectively on AWS
                    infrastructure.
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Our Vision
                  </h3>
                  <p className="text-gray-600">
                    We envision a world where deploying web applications is as
                    simple as pushing code, with no infrastructure headaches.
                  </p>
                </motion.div>
                <motion.div
                  className="bg-gray-100 rounded-2xl p-8"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Our Values
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Simplicity: We make complex things simple",
                      "Transparency: No hidden costs or surprises",
                      "Innovation: Always improving our platform",
                      "Community: Built by developers, for developers",
                    ].map((value, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 text-primary-600 mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
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
                        </div>
                        <span className="text-gray-600">{value}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-2 mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Passionate individuals working together to make cloud deployment
                simple and accessible.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-primary-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600">{member.bio}</p>
                    <div className="mt-4 flex space-x-4">
                      {["twitter", "github", "linkedin"].map((social) => (
                        <a
                          key={social}
                          href="#"
                          className="text-gray-400 hover:text-primary-600 transition-colors"
                          aria-label={`${member.name}'s ${social}`}
                        >
                          <span className="sr-only">{social}</span>
                          <svg
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
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
                Ready to get started?
              </motion.h2>
              <motion.p
                className="text-xl mb-10 text-primary-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Join thousands of developers who trust our platform for their
                deployment needs.
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
                  Contact Sales
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default About;
