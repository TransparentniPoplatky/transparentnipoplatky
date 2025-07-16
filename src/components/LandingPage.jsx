import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className=" text-gray-800 flex flex-col min-h-[calc(100vh-8rem)] px-6 py-6 sm:px-6 sm:py-12 max-w-4xl mx-auto">
      <section className="text-center py-10 sm:py-20 bg-gradient-to-b from-indigo-50 to-white rounded-lg shadow-md">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-900 mb-4 sm:mb-6">
          Co jsou Transparentní Poplatky?
        </h1>
        <p className="max-w-xl mx-auto text-base sm:text-lg mb-6 sm:mb-10 px-4">
          Pomáháme lidem odhalit skryté poplatky a informovat o nekalých praktikách v investování. Naše nástroje vám umožní lépe porozumět nákladům na investice a učinit informovaná rozhodnutí.
        </p>
        <Link
          to="/o-projektu"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full text-base font-semibold shadow-lg hover:bg-indigo-700 transition"
        >
          Více o projektu
        </Link>
      </section>

      <section id="calculator" className="mb-20 mt-20">
        <h2 className="text-3xl font-bold mb-6 text-indigo-800">Investiční kalkulačky</h2>
        <p className="mb-6 text-gray-700">
          Zkuste si dopředu spočítat, jaké poplatky budete platit, a zjistěte, jak mohou ovlivnit vaše výnosy v čase. Štěstí přeje připraveným a informovaným. Naše kalkulačky vám pomohou lépe pochopit, jak fungují investice a jaké náklady s nimi souvisejí.
        </p>
        <Link to="/kalkulacky" className="text-indigo-600 underline hover:text-blue-800">
          Zobrazit kalkulačky
        </Link>
      </section>

      <section id="stories" className="mb-20">
        <h2 className="text-3xl font-bold mb-6 text-indigo-800">Vaše příběhy</h2>
        <p className="mb-6 text-gray-700">
          V této sekci budu sdílet příběhy lidí, kteří byli nečestně oklamáni nebo nedostali jasné informace o poplatcích. Tyto příběhy nám pomohou lépe pochopit, jaké problémy mohou nastat a proč je důležité být obezřetný při výběru investic, abychom se vyhnuli podobným chybám a zbytečným ztrátám.
        </p>
        <Link to="/pribehy" className="text-indigo-600 underline hover:text-blue-800">
          Přečíst příběhy
        </Link>
      </section>

      <section id="comparison" className="mb-20">
        <h2 className="text-3xl font-bold mb-6 text-indigo-800">Srovnání fondů a alternativ</h2>
        <p className="mb-6 text-gray-700">
          Do budoucna zde plánuji přehledně zobrazit srovnání běžných investičních fondů, jejich poplatků a případně i dalších alternativních možností. Veškeré poplatky a náklady budou jasně zobrazeny, abyste mohli lépe porozumět, jaké možnosti máte a jaké jsou jejich skutečné náklady.
        </p>
        <p className="italic text-gray-500">Brzy snad k dispozici.</p>
      </section>

      {/* Rámeček pro upozornění */}
      <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-md shadow-sm mb-12">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            {/* Ikona upozornění (volitelné, ale doporučené pro vizuální zvýraznění) */}
            <svg className="h-6 w-6 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-indigo-800">Upozornění k práci sinformacemi na stránce</h3>
          </div>
        </div>
        <div className="mt-2 text-sm text-indigo-700">
          <p>
            Snažím se o co největší objektivitu a transparentnost. Nikoho nechci pomlouvat ani napadat, proto nikde nejsou zmíněna jména poradců ani firem, i když si to často můžeme domyslet. Většina příběhů je od vás, či sebrána z internetu. Proto neručím za přesnost uvedených informací.
          </p>
                    <p class ="pt-4">
            Co se kalkulaček týče, zatím jsou v rané fázi. Chci je neustále zlepšovat a zpřesňovat. Také nasdílím přesný i zjednodušený postup a logiku výpočtů. Ale už teď si myslím, že mohou být prospěšné a lidem pomáhat. Jen berte na vědomí, že čísla a realita se samozřejmě mohou lišit.
          </p>
        </div>
      </div>
    </div>
  );
}
