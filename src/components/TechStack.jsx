import { motion } from "framer-motion";

const TechStack = () => {
  const technologies = [
    { name: "Java", slug: "codecrafters" },
    { name: "PHP", slug: "php" },
    { name: "Spring Boot", slug: "springboot" },
    { name: "Keras", slug: "keras" },
    { name: "Pandas", slug: "pandas" },
    { name: "Python", slug: "python" },
    { name: "CSS", slug: "css" },
    { name: "Tailwind CSS", slug: "tailwindcss" },
    { name: "MongoDB", slug: "mongodb" },
    { name: "PostgreSQL", slug: "postgresql" },
    { name: "Supabase", slug: "supabase" },
    { name: "Android", slug: "android" },
    { name: "JavaScript", slug: "javascript" },
    { name: "React", slug: "react" },
    { name: "Angular", slug: "angular" },
    { name: "SQL", slug: "mysql" }, // Using MySQL icon for generic SQL
    { name: "PyTorch", slug: "pytorch" },
    { name: "Laravel", slug: "laravel" },
    { name: "Flask", slug: "flask" },
    { name: "Flutter", slug: "flutter" },
    { name: "TensorFlow", slug: "tensorflow" },
    { name: "Ngrok", slug: "ngrok" },
    { name: "Postman", slug: "postman" },
    { name: "Git", slug: "git" },
    { name: "Blender", slug: "blender" },
    { name: "Typescript", slug: "typescript" },
    { name: "Scikit-learn", slug: "scikitlearn" },
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      id="tech-stack"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="py-20 relative"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          Technologies & Tools
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group bg-glass p-6 rounded-xl flex flex-col items-center justify-center gap-4 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
            >
              <div className="w-12 h-12 relative flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                <img
                  src={`https://cdn.simpleicons.org/${tech.slug}`}
                  alt={tech.name}
                  className="w-full h-full object-contain filter drop-shadow-lg"
                  onError={(e) => {
                    e.target.style.display = 'none'; // Hide if image fails
                  }}
                />
              </div>
              <span className="font-medium text-foreground/80 group-hover:text-primary-light transition-colors text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TechStack;
