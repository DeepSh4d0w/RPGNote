import HistoryCard from "../components/history-card";

export interface HistoryProps {
  title: string;
  subtitle?: string | null;
  description?: string | null;
  system: string;
  genders: string[];
  date?: Date | null;
}

const histories: HistoryProps[] = [
  {
    title: "Abominação",
    system: "--",
    genders: [],
  },
  {
    title: "Colina Escarlate",
    system: "--",
    genders: [],
  },
  {
    title: "Limbo",
    system: "--",
    genders: [],
  },
  {
    title: "Canção de Ninar",
    system: "--",
    genders: [],
  },
  {
    title: "Kumetsu",
    system: "--",
    genders: [],
  },
  {
    title: "Paradise",
    system: "--",
    genders: [],
  },
  {
    title: "Mentes Fragmantadas",
    system: "--",
    genders: [],
  },
  {
    title: "Reliquias",
    subtitle: "A torre",
    system: "--",
    genders: [],
  },
  {
    title: "Heresia",
    system: "--",
    genders: [],
  },
  {
    title: "Digimon",
    subtitle: "Glitch",
    system: "--",
    genders: [],
  },
  {
    title: "Ordo Veritatis",
    system: "--",
    genders: [],
  },
  {
    title: "Ordo Medievalis",
    system: "--",
    genders: [],
  },
  {
    title: "Alvorecer Escarlata",
    system: "--",
    genders: [],
  },
  {
    title: "Steven Universo",
    system: "--",
    genders: [],
  },
  {
    title: "SCP",
    system: "--",
    genders: [],
  },
  {
    title: "RPG de Colelo",
    system: "--",
    genders: [],
  },
  {
    title: "Ben 10",
    system: "--",
    genders: [],
  },
  {
    title: "Call of Cthulhu",
    system: "--",
    genders: [],
  },
  {
    title: "Terra Devastada",
    system: "--",
    genders: [],
  },
  {
    title: "Avatar",
    system: "--",
    genders: [],
  },
  {
    title: "Elden Ring",
    system: "--",
    genders: [],
  },
  {
    title: "Abominação 2",
    system: "--",
    genders: [],
  },
  {
    title: "Insânia",
    system: "--",
    genders: [],
  },
  {
    title: "Ecos do Oculto 2",
    system: "--",
    genders: [],
  },
  {
    title: "Silent Hill pt2",
    system: "--",
    genders: [],
  },
  {
    title: "Ecos do Guil",
    system: "--",
    genders: [],
  },
  {
    title: "Sherlock",
    system: "--",
    genders: [],
  },
  {
    title: "Duskwood",
    system: "--",
    genders: [],
  },
  {
    title: "RPG da Ju",
    system: "--",
    genders: [],
  },
  {
    title: "Sombra e Ossos",
    system: "--",
    genders: [],
  },
];

export default function Home() {
  return (
    <div className="h-screen flex flex-row items-center justify-center flex-wrap p-8">
      <ul className="flex flex-row gap-4 flex-wrap items-center justify-center">
        {histories.map((history) => {
          return <HistoryCard {...history} />;
        })}
      </ul>
    </div>
  );
}
