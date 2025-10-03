import React from "react";

const articles = [
  {
    title: "How to Use GitHub as a Database for Your Web Projects",
    description:
      "Learn how to turn GitHub into a lightweight JSON database for your apps with versioning and free hosting.",
    image: "https://media.licdn.com/dms/image/v2/D4D12AQFnMDFb1gDFKA/article-cover_image-shrink_600_2000/B4DZmrEa35JEAQ-/0/1759511696052?e=1762387200&v=beta&t=2RylRcmcW36sz9XeK8DFl-tEJt1ooPt79y2wDgYK64A", // your uploaded cover photo
    url: "https://www.linkedin.com/posts/salman-ahmad-1773aa221_how-to-use-github-as-a-database-for-your-activity-7379928111326330881-09PD?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfD4msBjpOcMgNPVZVRFNYVCftHmckQjCk",
  },
  {
    title: "How to Make vw Refer to a Container Instead of the Viewport Width",
    description:
      "The vw (viewport width) unit in CSS normally refers to the width of the entire browser window.",
    image: "/vw.png",
    url: "https://www.linkedin.com/posts/salman-ahmad-1773aa221_hey-everyone-have-you-ever-struggled-activity-7307017982138806272-8IvX?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfD4msBjpOcMgNPVZVRFNYVCftHmckQjCk",
  },
];

const LinkedInArticles = () => {
  return (
    <section className="py-16 text-white" id="articles">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          My LinkedIn Articles
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="glass bg-black rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex flex-col justify-between items-start h-[18rem]">
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-400 mb-4">{article.description}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-white text-black hover:text-white border border-white rounded-full hover:bg-transparent transition-colors"
                >
                  Read on LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinkedInArticles;
