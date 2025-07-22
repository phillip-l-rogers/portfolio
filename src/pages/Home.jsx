import { HiOutlineFolderOpen, HiOutlineMail } from "react-icons/hi";
import { SiLinkedin } from "react-icons/si";
import IconButton from "../components/IconButton";

function Home() {
  return (
    <div className="p-6 flex flex-col items-center text-center gap-8">
      <h1 className="text-4xl font-bold">Hi, I’m Phillip Rogers</h1>
      <p className="max-w-xl text-gray-700">
        I’m a backend-focused engineer expanding into full-stack web development.
        I enjoy building tools that solve real problems — with clean code, strong systems,
        and a user-first mindset.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <IconButton href="/projects" icon={HiOutlineFolderOpen}>
          View My Projects
        </IconButton>
        <IconButton href="/contact" icon={HiOutlineMail} variant="outline">
          Get in Touch
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/phillip-rogers-b76329365"
          icon={SiLinkedin}
          variant="blue"
          external
        >
          LinkedIn
        </IconButton>
      </div>
    </div>
  );
}

export default Home;
