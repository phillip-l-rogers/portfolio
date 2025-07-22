function ProjectCard({ title, description, github, live, status }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-200">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        {status && (
          <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded">
            {status}
          </span>
        )}
      </div>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex gap-4">
        {live ? (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Live Site
          </a>
        ) : (
          <span className="text-gray-400 italic">Live Site coming soon</span>
        )}
        {github ? (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:underline"
          >
            GitHub
          </a>
        ) : (
          <span className="text-gray-400 italic">GitHub coming soon</span>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
