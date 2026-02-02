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
        delayChildren: 0.2, // Small delay to let the section settle
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.5 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 1,
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
      className="py-20 relative overflow-hidden"
    >
        {/* Ambient Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-[100px] -z-10 animate-pulse delay-700"></div>

      <div className="container mx-auto px-6">
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-500 cursor-default"
        >
          Technologies & Tools
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.15, 
                rotate: 2, 
                y: -10,
                transition: { type: "spring", stiffness: 300 } 
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-glass/80 backdrop-blur-md p-6 rounded-2xl flex flex-col items-center justify-center gap-4 border border-white/5 hover:border-primary/50 transition-colors shadow-lg hover:shadow-primary/20 cursor-pointer"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              <div className="w-14 h-14 relative flex items-center justify-center z-10 transition-transform duration-300 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                <img
                  src={`https://cdn.simpleicons.org/${tech.slug}`}
                  alt={tech.name}
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none'; // Hide if image fails
                  }}
                />
              </div>
              <span className="font-semibold text-foreground/70 group-hover:text-white transition-all duration-300 transform group-hover:scale-110 z-10 text-center">
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
