import { HiOutlineMail } from "react-icons/hi";
import { SiGithub, SiLinkedin } from "react-icons/si";
import IconButton from "../components/IconButton";

function Contact() {
  return (
    <div className="p-6 max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
      <p className="mb-6">
        I'm a backend-focused software engineer with a passion for solving real-world 
        problems, mentoring others, and building tools that make work easier. Most of 
        my experience is in Python, desktop apps, and scientific computing—but I'm 
        currently expanding into full-stack web development with Django and React. I 
        bring strong communication, technical depth, and a system-thinking mindset to 
        every project.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <IconButton href="mailto:phillip.l.rogers.29@gmail.com" icon={HiOutlineMail}>
          phillip.l.rogers.29@gmail.com
        </IconButton>          
        <IconButton
          href="https://www.linkedin.com/in/phillip-rogers-b76329365"
          icon={SiLinkedin}
          variant="blue"
          external
        >
          LinkedIn
        </IconButton>
        <IconButton
        href="https://github.com/phillip-l-rogers"
        icon={SiGithub}
        variant="gray"
        external
        >
          GitHub
        </IconButton>
      </div>
    </div>
  );
}

export default Contact;
