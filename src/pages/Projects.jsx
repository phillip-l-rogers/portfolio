import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "🎾 Pickleball",
    description:
      `A full-stack web app for managing round-robin pickleball tournaments. Built with
       Django REST Framework and React, the app allows users to register players, 
       auto-generate match schedules, enter match scores, and view real-time standings. 
       Designed as the final capstone for CS50’s Web Programming course, this project 
       demonstrates advanced use of APIs, authentication, model relationships, and 
       dynamic front-end UI.`,
    status: "🚧 In Progress"
  },
  {
    title: "📬 Mail",
    description:
      `A single-page Gmail-style email client built with Django and JavaScript. 
       Features include inbox, sent, archive, and compose views, as well as marking 
       emails as read/unread and archiving messages. Interactivity is powered by 
       asynchronous JavaScript calls to a Django backend API, showcasing effective 
       use of fetch, event handling, and DOM manipulation.`,
    github: "https://github.com/phillip-l-rogers/mail",
    live: "https://mail-vnvy.onrender.com",
  },
  {
    title: "🛍️ Commerce",
    description:
      `An eBay-like online auction site built with Django. Users can list items for 
       sale, place bids, comment on listings, add items to a watchlist, and close 
       auctions. The app supports user authentication, category filtering, and auction 
       logic (highest bid wins). This project demonstrates strong Django model design, 
       template inheritance, and form handling.`,
    github: "https://github.com/phillip-l-rogers/commerce",
    live: "https://commerce-2onf.onrender.com",
  },
  {
    title: "🌐 Network",
    description:
      `A Twitter-like social networking platform where users can post updates, 
       follow/unfollow others, like posts, and edit their own content. Built with 
       Django and JavaScript, this project features API endpoints for posts and user 
       actions, pagination, real-time like updates, and a clean UI. Emphasizes API 
       usage, stateful UI updates, and RESTful design.`,
    github: "https://github.com/phillip-l-rogers/network",
    live: "https://network-zsy0.onrender.com",
  },
];

function Projects() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
