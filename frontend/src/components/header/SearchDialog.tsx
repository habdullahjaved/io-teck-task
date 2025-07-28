"use client";

import { Dialog } from "@headlessui/react";
import { Search, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";
import { setQuery } from "@/lib/features/searchSlice";
import { useSearch } from "@/hooks/useSearch";
import Link from "next/link";

interface SearchDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function SearchDialog({ open, onClose }: SearchDialogProps) {
  const dispatch = useDispatch();
  const query = useSelector((state: RootState) => state.search.query);
  const { search } = useSearch();
  const results = search(query);

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-lg rounded-lg bg-white shadow-lg p-4">
          {/* Input */}
          <div className="flex items-center border-b pb-2">
            <Search className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="text"
              value={query}
              onChange={(e) => dispatch(setQuery(e.target.value))}
              placeholder="Search..."
              className="flex-1 outline-none border-none focus:ring-0"
            />
            <button onClick={onClose} className="ml-2 p-1">
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Results */}
          <div className="mt-4 space-y-2">
            {results.length === 0 && query ? (
              <p className="text-sm text-gray-500">No results found.</p>
            ) : (
              results.map((r, idx) => (
                <Link
                  key={idx}
                  href={r.slug}
                  onClick={onClose}
                  className="block p-2 border rounded hover:bg-gray-100 transition"
                >
                  <span className="block font-semibold">{r.title}</span>
                  {r.description && (
                    <span className="text-sm text-gray-500">
                      {r.description}
                    </span>
                  )}
                </Link>
              ))
            )}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
