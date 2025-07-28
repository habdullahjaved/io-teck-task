// app/search/page.tsx
"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";
import { useSearch } from "@/hooks/useSearch";
import Link from "next/link";

export default function SearchPage() {
  const query = useSelector((state: RootState) => state.search.query);
  const { search } = useSearch();
  const results = search(query);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Search Results</h1>
      {query ? (
        results.length > 0 ? (
          <ul className="space-y-2">
            {results.map((r, i) => (
              <li key={i} className="border p-2 rounded hover:bg-gray-100">
                <Link href={r.slug}>
                  <span className="font-semibold">{r.title}</span>
                  {r.description && (
                    <p className="text-sm text-gray-500">{r.description}</p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found for "{query}"</p>
        )
      ) : (
        <p>Type something in the search box...</p>
      )}
    </div>
  );
}
