import SkillCard from "@/components/SkillCard";
import ContactCard from "@/components/ContactCard";


export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 grow">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">About Me</h2>
      <div className="text-lg text-gray-700 space-y-4">
        <p>
          I am a software developer and technical digital designer currently advancing my full-stack engineering skills through BYU-Pathway. 
        </p>
        <p>
          I specialize in building responsive web applications using React/Next.js, Node.js, and Tailwind CSS. I leverage my creative background in technical fashion and 3D jewelry CAD design to architect structured, highly engaging user interfaces.
        </p>
      </div>

      <section className="mt-12" >
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Technical Arsenal</h3>
        <div className="grid gap-6 md:grid-cols-2">
          <SkillCard 
            category="Full-Stack Engineering"
            description="Building secure backend APIs and responsive user interfaces using modern JavaScript frameworks."
            skills={['Next.js', 'React', 'Node.js', 'Tailwind CSS', 'PostgreSQL']}
          />
          <SkillCard 
            category="Digital & Technical Design"
            description="Drafting technical apparel patterns and rendering custom 3D jewelry CAD models."
            skills={['MatrixGold', 'Rhino Render', 'Seamly2D', 'CLO3D', 'Blender']}
          />
        </div>
      </section>
      
      <section className="mt-16">
        <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">Contact Me</h3>
        <div className="max-w-lg mx-auto">
          <ContactCard 
            email="dadefenwa@byupathway.org"
            phone="+1 (555) 123-4567"
            linkedin="https://www.linkedin.com/in/damilolamercy17"
          />
        </div>
      </section>
      
    </main>
  );
}