import React from "react";

const articles = [
  {
    title: "How to Use GitHub as a Database for Your Web Projects",
    description:
      "Learn how to turn GitHub into a lightweight JSON database for your apps with versioning and free hosting.",
    image: "/github.png", // your uploaded cover photo
    url: "https://www.linkedin.com/posts/salman-ahmad-1773aa221_hey-everyone-have-you-ever-struggled-activity-7307017982138806272-8IvX?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfD4msBjpOcMgNPVZVRFNYVCftHmckQjCk",
  },
  {
    title: "How to Make vw Refer to a Container Instead of the Viewport Width",
    description:
      "Hey everyone! 👋 Have you ever struggled with vw units behaving inconsistently in a max-width container?",
    image: "/vw.png",
    url: "https://www.linkedin.com/posts/salman-ahmad-1773aa221_how-to-use-github-as-a-database-for-your-activity-7379928111326330881-09PD?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfD4msBjpOcMgNPVZVRFNYVCftHmckQjCk",
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
              <div className="p-5 h-[18rem] flex flex-col items-start justify-between">
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.description}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-white border border-white text-black hover:text-white rounded-full hover:bg-transparent transition-colors"
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
