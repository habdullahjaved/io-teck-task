"use client";

import { useTeam } from "@/hooks/useTeam";
import { useLocale } from "next-intl";
import { useState } from "react";

export default function TeamPage() {
  const locale = useLocale();
  const team = useTeam();
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 6;

  const isRTL = locale === "ar";

  const filtered = team.filter((member) =>
    member.name.toLowerCase().includes(query.toLowerCase())
  );

  const paginated = filtered.slice((page - 1) * perPage, page * perPage);
  const totalPages = Math.ceil(filtered.length / perPage);

  return (
    <section className="py-12 px-4">
      <input
        type="text"
        placeholder={locale === "ar" ? "ابحث عن الفريق..." : "Search team..."}
        className="mb-6 p-3 border w-full rounded"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setPage(1);
        }}
        dir={isRTL ? "rtl" : "ltr"}
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginated.map((member) => (
          <div
            key={member.slug}
            className={`rounded overflow-hidden shadow-lg bg-white border-l-4 ${
              isRTL ? "border-l-0 border-r-4" : ""
            }`}
            style={{
              borderColor: "#4b2515",
              direction: isRTL ? "rtl" : "ltr",
            }}
          >
            {member.image && (
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h3
                className="text-xl font-bold mb-1"
                style={{ color: "#4b2515" }}
              >
                {member.name}
              </h3>
              <p
                className="text-sm font-medium mb-2"
                style={{ color: "#4b2515" }}
              >
                {member.role}
              </p>
              <p className="text-sm text-gray-700">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex gap-2 mt-8 justify-center flex-wrap">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-4 py-2 rounded border ${
              i + 1 === page ? "bg-[#4b2515] text-white" : "bg-white text-black"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
}
