import React from "react";

const articles = [
  {
    title: "How to Use GitHub as a Database for Your Web Projects",
    description:
      "Learn how to turn GitHub into a lightweight JSON database for your apps with versioning and free hosting.",
    image: "/github-database-cover.png", // your uploaded cover photo
    url: "https://www.linkedin.com/pulse/how-to-use-github-as-a-database-your-web-projects-7379928110726791168/",
  },
  {
    title: "Another Article Title",
    description:
      "Short description of your second article to attract clicks.",
    image: "/another-cover.png",
    url: "https://www.linkedin.com/pulse/your-second-article-link",
  },
];

const LinkedInArticles = () => {
  return (
    <section className="py-16" id="articles">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          My LinkedIn Articles
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="glass rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.description}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
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
