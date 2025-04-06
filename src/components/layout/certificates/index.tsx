"use client";
import { useState } from "react";
import { certificates } from "@/data/certificates";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

const ITEMS_PER_PAGE = 5;

export function CertificatesSection() {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentCertificates = certificates.slice(startIndex, endIndex);
  const totalPages = Math.ceil(certificates.length / ITEMS_PER_PAGE);

  return (
    <section className="relative py-16 px-4" id="certificates">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">📜 Certificados</h2>

        <ul className="space-y-4">
          {currentCertificates.map((cert, index) => (
            <li
              key={index}
              className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors flex justify-between items-center"
            >
              <div>
                <p className="text-lg font-semibold">{cert.title}</p>
                <p className="text-sm text-gray-400">
                  {cert.issuer} • {cert.date}
                </p>
              </div>
              {cert.url && (
                <Link
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between"
                >
                  <FaExternalLinkAlt className="ml-4 text-gray-400" />
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 text-sm bg-gray-700 rounded disabled:opacity-50"
          >
            Anterior
          </button>

          <span className="text-sm text-gray-300">
            Página {currentPage} de {totalPages}
          </span>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-sm bg-gray-700 rounded disabled:opacity-50"
          >
            Próxima
          </button>
        </div>
      </div>
    </section>
  );
}
