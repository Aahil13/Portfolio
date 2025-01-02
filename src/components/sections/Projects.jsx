import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Eye, Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "TMDB API Reference",
      description:
        "Created a comprehensive API reference for The Movie Database using Postman. Including authentication, rate limiting, and endpoint usage guides.",
      tags: ["Postman", "OpenAPI", "Markdown"],
      links: { preview: "https://documenter.getpostman.com/view/18359845/2s9Ykt3dgs", code: "https://speeding-firefly-554320.postman.co/workspace/The-Movie-DB~2f3d2382-332d-40aa-b729-03a4df332100/collection/18359845-25e8fe02-2185-49bf-acdc-e25e0f3a2f47?action=share&creator=18359845" },
    },
    {
      title: "RAWG API Reference",
      description:
        "Documented the API reference for RAWG, the largest video game database. Covering detailed endpoint descriptions and integration examples.",
      tags: ["ReadMe", "API", "Technical Writing"],
      links: { preview: "https://rawg.readme.io/reference/overview", code: "https://rawg.readme.io/reference/overview" },
    },
    {
      title: "Node.js Developer Docs",
      description:
        "Developed detailed developer documentation for Node.js tutorials using VuePress. Focused on core concepts and practical examples.",
      tags: ["VuePress", "Node.js", "JavaScript"],
      links: { preview: "https://aahil-nodejs.netlify.app/", code: "https://github.com/Aahil13/Node-docs" },
    },
    {
      title: "The JavaScript Guide",
      description:
        "Documented an interactive resource for learning and mastering JavaScript programming. This documentation aims at fostering good Information architecture for better accessibility.",
      tags: ["Docsify", "Node.js", "JavaScript"],
      links: { preview: "https://the-js-guide.netlify.app/#/", code: "https://github.com/Aahil13/The-JS-Guide" },
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    className: "gap-6",
    dotsClass: "slick-dots !bottom-[-2rem]",
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-thistle">
        Projects 💼
      </h2>
      
      <div className="relative px-4">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="px-3">
              <div className="bg-[#1a1f2e] text-thistle p-8 rounded-lg shadow-xl h-full">
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#2a303c] text-gray-300 px-3 py-1 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6">
                  <a
                    href={project.links.preview}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Eye size={16} />
                    <span>Preview</span>
                  </a>
                  <a
                    href={project.links.code}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Code size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;