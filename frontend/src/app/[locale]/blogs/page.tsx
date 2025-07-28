"use client";

import { useTranslations } from "next-intl";

export default function BlogPage() {
  const t = useTranslations("BlogPage");
  const posts = t.raw("posts");

  return (
    <section className="bg-white text-gray-800 min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6" style={{ color: "#4b2515" }}>
          {t("title")}
        </h1>
        <p className="text-lg text-gray-600 mb-8">{t("intro")}</p>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post: any) => (
            <a
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="bg-gray-50 p-5 rounded-lg shadow hover:shadow-lg transition"
            >
              <h2
                className="text-xl font-semibold mb-2"
                style={{ color: "#4b2515" }}
              >
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm">{post.excerpt}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
