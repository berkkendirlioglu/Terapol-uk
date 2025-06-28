"use client";
import { Check, ChevronDown } from "lucide-react";
import React, { useState } from "react";

const data:{title:string,desc:string}[] = [
  {
    "title": "EXPERIENȚĂ ȘI ECHIPĂ DE SPECIALIȘTI",
    "desc": "Am creat un brand de încredere, bazat pe experiența noastră de peste 30 de ani în domeniul chimicalelor pentru construcții, împreună cu o echipă de specialiști experimentați."
  },
  {
    "title": "CALITATEA MATERIALELOR",
    "desc": "Producție realizată fără compromisuri în ceea ce privește calitatea."
  },
  {
    "title": "PRODUS LOCAL",
    "desc": "Valoare adăugată adusă țării prin capitalul local - național și cifrele noastre de export în creștere anuală, asigurând păstrarea capitalului în interiorul țării."
  },
  {
    "title": "DEZVOLTARE CONTINUĂ ȘI ABORDARE INOVATIVĂ",
    "desc": "Proiectarea de noi produse de către echipa noastră experimentată de cercetare-dezvoltare, ținând cont de nevoile sectorului."
  }
];

export default function Accordion() {
  const [active, setActive] = useState<number>(0);
  return (
    <div className="flex flex-col gap-3">
      {data.map((data, index) => (
        <div key={index}>
          <div
            className={`cursor-pointer flex justify-between items-center py-3 px-4 rounded-[3px] text-[18px] ${
              active === index ? "bg-[#312783] text-white" : "bg-transparent"
            }`}
            onClick={() => setActive(index)}
          >
            <div className="flex items-center gap-4">
              <Check />
              <p className="select-none pointer-events-none">{data.title}</p>
            </div>
            <div>
              <ChevronDown
                className={`${
                  active === index ? "rotate-180" : "rotate-0"
                } transition-all`}
              />
            </div>
          </div>

          <div
            className={`${
              active === index ? "py-5" : "h-[0px] py-0 overflow-hidden"
            } transition-all px-8 text-[#888] text-[15px]`}
          >
            {data.desc}
          </div>
        </div>
      ))}
    </div>
  );
}
