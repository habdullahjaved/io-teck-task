"use client";
import { useServices } from "@/hooks/useServices";
import { useState } from "react";

export default function ServicesPage() {
  const services = useServices();
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 6;

  const filtered = services.filter((s) =>
    s.title.toLowerCase().includes(query.toLowerCase())
  );

  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  const totalPages = Math.ceil(filtered.length / perPage);

  return (
    <section className="py-12 px-4">
      <input
        type="text"
        placeholder="Search services..."
        className="mb-6 p-2 border w-full"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setPage(1);
        }}
      />

      <div className="grid md:grid-cols-2 gap-6">
        {paginated.map((service) => (
          <div
            key={service.slug}
            className="p-4 bg-brown-700 text-black rounded shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-2 mt-6 justify-center">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 rounded ${
              i + 1 === page ? "bg-brown-800 text-white" : "bg-white text-black"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
}
