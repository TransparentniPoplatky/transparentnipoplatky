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
    </div>
  );
}

