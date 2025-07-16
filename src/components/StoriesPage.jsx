import React, { useState } from "react";
import { Link } from "react-router-dom";
import stories from "../data/storiesData";

const STORIES_PER_PAGE = 5;
const PREVIEW_CHAR_LIMIT = 280; 

export default function StoriesPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLast = currentPage * STORIES_PER_PAGE;
  const indexOfFirst = indexOfLast - STORIES_PER_PAGE;
  const currentStories = stories.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(stories.length / STORIES_PER_PAGE);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-indigo-900 mb-8">Příběhy lidí</h1>
      <p className="mb-6 text-lg text-gray-700">
        Skutečné zkušenosti lidí, kteří narazili na neférové praktiky, byli nečestně informováni o investičních poplatcích nebo se jinak spálili. Tyto příběhy nám pomáhají lépe pochopit, jaké problémy mohou nastat a proč je důležité být obezřetný při výběru investic.
      </p>
     <strong> <p className="mb-6 text-lg text-gray-700">
        Zatím je tu jen můj příběh a budu přidávat zkušenosti mých známých, případně lidí, jejichž příběhy jsem našel různě v diskuzích. Rád bych ale co nejdříve začal publikovat vaše autentické a různé zkušennosti. Tak se ozvěte!
      </p></strong>

      <div className="space-y-6">
        {currentStories.map((story) => {
          // Získáme pouze první odstavec pro náhled
          const firstParagraph = story.content[0];
          let previewText = firstParagraph;
          let needsMoreLink = false;

          // Pokud je první odstavec delší než limit, zkrátíme ho a přidáme "..."
          if (firstParagraph.length > PREVIEW_CHAR_LIMIT) {
            previewText = firstParagraph.slice(0, PREVIEW_CHAR_LIMIT) + "...";
            needsMoreLink = true; 
          }

          return (
            <div key={story.id} className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded">
              <h2 className="text-xl font-semibold text-indigo-800 mb-2">{story.title}</h2>
              {/* Použijeme dangerouslySetInnerHTML pro zobrazení zkráceného textu */}
              <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: previewText }} />
              
              <Link
                to={`/pribehy/${story.id}`}
                className="mt-2 inline-block text-sm text-indigo-600 hover:underline"
              >
                Zobrazit celý příběh
              </Link>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === i + 1
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

            {/* Call to action */}
      <div className="mt-16 text-center">
        <h3 className="mb-6 text-lg text-gray-700">
          Máte podobnou zkušenost? Pošlete nám svůj příběh přes Instagram nebo e-mail.
        </h3>
        <a
          href="https://www.instagram.com/transparentnipoplatky?igsh=MTFucHBrand6cjJybg%3D%3D&utm_source=qr"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sdílet svůj příběh
        </a>
      </div>
    </div>
  );
}
