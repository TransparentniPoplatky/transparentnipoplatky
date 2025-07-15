import React from "react";
import { Link } from "react-router-dom";

export default function KalkulackyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-indigo-900 mb-6 text-center">Kalkulačky</h1>
      <p className="text-gray-700 text-lg mb-12 text-center">
        Můžete si momentálně vybrat ze tří kalkulaček. Jsou to nástroje pro ověřování informací a srovnání různých alternativ na trhu. Rozhodně vám doporučuji si je vyzkoušet a zjistit, jaké poplatky platíte a jak mohou ovlivnit vaše investice v čase. Všechny kalkulačky jsou zdarma a bez registrace. Neberte je však jako finanční poradenství či investiční rady, ale spíše jako nástroje pro lepší pochopení vašich investic a jejich nákladů.
      </p>

      <div className="space-y-10">
        {/* Kalkulačka 1 */}
        <section className="text-center py-12 bg-gradient-to-b from-indigo-50 to-white rounded-lg shadow-md px-6">
          <h2 className="text-3xl font-extrabold text-indigo-900 mb-4">Výpočet poplatků</h2>
          <p className="text-indigo-700 text-lg max-w-xl mx-auto mb-6">
            Spočítejte si, kolik vás investiční poplatky stojí během let a kolik vám „sežerou“ z výnosu. Je možné započítat vstupní poplatek + roční poplatky. Ty jsou často skryté a mohou výrazně ovlivnit vaše zisky.
          </p>
          <Link
            to="/kalkulacky/poplatky"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg hover:bg-indigo-700 transition"
          >
            Spustit kalkulačku
          </Link>
        </section>

        {/* Kalkulačka 2 */}
        <section className="text-center py-12 bg-gradient-to-b from-indigo-50 to-white rounded-lg shadow-md px-6">
          <h2 className="text-3xl font-extrabold text-indigo-900 mb-4">Složené úročení</h2>
          <p className="text-indigo-700 text-lg max-w-xl mx-auto mb-6">
            Klasická kalkulačka, kterou narozdíl od těch druhých naleznete i na mnoha jiných webech. Zjistěte, jak rychle mohou vaše peníze růst díky síle složeného úročení a proč na čase záleží.
          </p>
          <Link
            to="/kalkulacky/slozene-uroceni"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg hover:bg-indigo-700 transition"
          >
            Spustit kalkulačku
          </Link>
        </section>

        {/* Kalkulačka 3 */}
        <section className="text-center py-12 bg-gradient-to-b from-indigo-50 to-white rounded-lg shadow-md px-6">
          <h2 className="text-3xl font-extrabold text-indigo-900 mb-4">Srovnání alternativ</h2>
          <p className="text-indigo-700 text-lg max-w-xl mx-auto mb-6">
            Porovnejte různé typy investic. Můžete zadat různé fondy, ETF, přímé akcie, prostě cokoliv chcete. A zjistěte, jak se liší výsledkem po letech. Možná budete překvapeni.
          </p>
          <Link
            to="/kalkulacky/srovnani"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg hover:bg-indigo-700 transition"
          >
            Spustit kalkulačku
          </Link>
        </section>
      </div>
    </div>
  );
}

