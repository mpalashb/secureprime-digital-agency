import teamImage from "@/assets/team.jpg";

const About = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why SecurePrimeDex?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={teamImage} 
                alt="SecurePrimeDex team collaborating" 
                className="rounded-2xl shadow-card w-full"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                At SecurePrimeDex Digital Agency, we believe that growth should never come at the expense of security. Our team combines cutting-edge technology with creative excellence to deliver solutions that are not only beautiful and functional, but also secure and scalable.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                We specialize in automation, AI integration, and data-driven marketing strategies that help businesses thrive in the digital age. From startups to established enterprises, we're committed to turning your vision into reality with precision and innovation.
              </p>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent">150+</div>
                  <div className="text-muted-foreground mt-1">Projects Completed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent">98%</div>
                  <div className="text-muted-foreground mt-1">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent">24/7</div>
                  <div className="text-muted-foreground mt-1">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
