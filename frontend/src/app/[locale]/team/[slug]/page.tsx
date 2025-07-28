// app/team/[slug]/page.tsx
import { notFound } from "next/navigation";
import teamEn from "@/../public/locales/en/team.json";
import teamAr from "@/../public/locales/ar/team.json";
import Image from "next/image";
import { useLocale } from "next-intl";
type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};
export default async function TeamDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const team = locale === "ar" ? teamAr : teamEn;
  const member = team.find((t) => t.slug === slug);

  if (!member) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Profile Card */}
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 md:p-10 text-center md:text-left flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <Image
              src={member.image}
              alt={member.name}
              width={250}
              height={250}
              className="rounded-full object-cover shadow-lg border-4 border-brown-600"
            />
          </div>

          {/* Member Info */}
          <div>
            <h1 className="text-3xl font-bold text-brown-800 dark:text-brown-400">
              {member.name}
            </h1>
            <h2 className="text-lg text-gray-600 dark:text-gray-300 mt-1">
              {member.role}
            </h2>
            <p className="text-gray-700 dark:text-gray-200 mt-4 leading-relaxed">
              {member.bio}
            </p>

            {/* Keywords */}
            {member.keywords?.length > 0 && (
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                  Expertise:
                </h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {member.keywords.map((keyword, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm bg-brown-100 text-brown-700 rounded-full dark:bg-brown-700 dark:text-white"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Back to Team */}
        <div className="mt-8 text-center">
          <a
            href="/team"
            className="inline-block px-6 py-2 bg-[#4b2515] text-white rounded-lg hover:border-black transition shadow-md"
          >
            ← Back to Team
          </a>
        </div>
      </div>
    </div>
  );
}
