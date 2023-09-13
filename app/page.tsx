"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { Input } from "../components/Input";
import StoryCard from "../components/story-card";
import { storyProps } from "../models/story";

const stories: storyProps[] = [
  {
    title: "Abominação",
    description:
      "Até nós locais mais tranquilos e isolados, a loucura pode atingir o patamar divino, basta apenas uma palavra",
    storyteller: "Farias",
    system: "Ordem Paranormal - Modificado",
    genders: ["Terror", "Suspense", "Aventura"],
    date: new Date("09/23/23"),
  },
  {
    title: "Colina Escarlate",
    storyteller: "Coelho",
    system: "Colina Escarlate RPG - Próprio",
    genders: ["Suspense", "Terror", "Investigação"],
    date: new Date("09/23/23"),
  },
  {
    title: "Limbo",
    description:
      "Para onde vãos os mortos? O que acontece com suas almas? De onde vem os demônios? Bem, todas essas perguntas tem a mesma resposta, os mortos vão para o limbo, um mundo de demônios que só existe para torturar todas as almas perdidas, você obviamente não é uma exceção",
    storyteller: "Gamine",
    system: "Limbo RPG - Próprio",
    genders: ["Terror", "Suspense", "Aventura"],
    date: new Date("09/23/23"),
  },
  {
    title: "Canção de Ninar",
    storyteller: "Coelho",
    system: "Canção de Ninar RPG - próprio",
    genders: ["Fantasia", "Suspense"],
    date: new Date("09/30/23"),
  },
  {
    title: "Kimetsu",
    storyteller: "Bruno",
    system: "Kimetsu RPG - próprio",
    genders: ["Aventura", "Ação"],
    date: new Date("09/23/23"),
  },
  {
    title: "Paradise",
    storyteller: "Bella",
    description:
      "Paradise é um universo onde a fantasia e a imaginação são seus melhores amigos, com reinos e histórias a cada lugar narrado.",
    system: "Paradise RPG - próprio",
    genders: ["Fantasia", "Aventura", "Ação"],
    date: new Date("09/23/23"),
  },
  {
    title: "Mentes Fragmentadas",
    storyteller: "Coelho",
    system: "Ordem Paranormal v1.1",
    genders: ["Terror", "Investigação", "Suspense"],
    date: new Date("09/23/23"),
  },
  {
    title: "Relíquias",
    subtitle: "A torre",
    storyteller: "Gamine",
    system: "Ordem paranormal",
    genders: ["Fantasia", "Aventura", "Ação"],
    date: new Date("09/23/23"),
  },
  {
    title: "Heresia",
    storyteller: "Bolha",
    system: "Heresia RPG - próprio",
    genders: [],
    date: new Date("09/23/23"),
  },
  {
    title: "Digimon",
    subtitle: "Glitch",
    storyteller: "Gamine",
    system: "Digimon RPG - próprio",
    genders: ["Fantasia", "Ação", "Aventura", "Mundo Aberto"],
    date: new Date("09/23/23"),
  },
  {
    title: "Ordo Veritatis",
    storyteller: "Luvas",
    system: "Ordem paranormal",
    genders: ["Investigação", "misterio", "suspense"],
    date: new Date("09/23/23"),
  },
  {
    title: "Ordo Medievalis",
    storyteller: "Guil",
    system: "Ordo Medievalis RPG - próprio",
    genders: ["Fantasia", "Aventura", "Mistério", "Terror"],
    date: new Date("09/23/23"),
  },
  {
    title: "Alvorecer Escarlate",
    storyteller: "Luvas",
    system: "Ordem Paranormal v1.1",
    genders: ["Terror", "Suspense", "Investigação"],
    date: new Date("09/23/23"),
  },
  {
    title: "Steven Universo",
    storyteller: "Beleth",
    system: "--",
    genders: [],
    date: new Date("09/23/23"),
  },
  {
    title: "SCP",
    storyteller: "Coelho",
    system: "SCP RPG - próprio",
    genders: ["Terror", "Investigação", "Suspense"],
    date: new Date("09/23/23"),
  },
  {
    title: "RPG de Coelho",
    storyteller: "Coelho",
    system: "??? RPG - próprio",
    genders: ["???"],
    date: new Date("09/23/23"),
  },
  {
    title: "Ben 10",
    description:
      "As vezes a sorte bate na sua porta, e te traz um turbilhão de confusões pra resolver",
    storyteller: "Farias",
    system: "Ben 10 - próprio",
    genders: ["Fantasia", "Aventura", "Ação"],
    date: new Date("09/23/23"),
  },
  {
    title: "Call of Cthulhu",
    description:
      "Em tempos sombrios, é preciso abrir seus olhos para enxergar a verdade",
    storyteller: "Farias",
    system: "Call of Cthulhu RPG - próprio",
    genders: ["Horror Cósmico", "Ação"],
    date: new Date("09/23/23"),
  },
  {
    title: "Terra Devastada",
    description: "Sobreviva, evolua ou vire a próxima refeição da destruição",
    storyteller: "Farias",
    system: "Terra Devastada RPG - próprio",
    genders: ["Aventura", "Ação"],
    date: new Date("09/23/23"),
  },
  {
    title: "Avatar",
    storyteller: "Miquelin",
    system: "Avatar: A Lenda de Aang",
    genders: ["Ação", "Aventura", "Exploração"],
    date: new Date("09/23/23"),
  },
  {
    title: "Elden Ring",
    description:
      "A guerra é impiedosa, e você não é bem vindo aqui, então lute ou volte para sua existência patética, andarilho maculado",
    storyteller: "Farias",
    system: "Elden Ring RPG - próprio",
    genders: ["Aventura", "Ação", "Souls Like"],
    date: new Date("09/23/23"),
  },
  {
    title: "Abominação 2",
    description:
      "Não reconheceria um deus, nem se ele parasse para dançar na sua frente",
    storyteller: "Farias",
    system: "Ordem Paranormal v1.1",
    genders: ["Terror", "Suspense", "Aventura"],
    date: new Date("09/23/23"),
  },
  {
    title: "Insânia",
    storyteller: "Farias",
    system: "Insânia RPG - próprio",
    genders: [],
    date: new Date("09/23/23"),
  },
  {
    title: "Ecos do Oculto 2",
    storyteller: "Guil",
    system: "--",
    genders: [],
    date: new Date("09/23/23"),
  },
  {
    title: "Limítrofe pt2",
    storyteller: "Bella",
    system: "--",
    genders: [],
    date: new Date("09/23/23"),
  },
  {
    title: "Ecos do Guil",
    storyteller: "Guil",
    system: "--",
    genders: [],
    date: new Date("09/23/23"),
  },
  {
    title: "Sherlock",
    storyteller: "Farias",
    system: "--",
    genders: [],
    date: new Date("09/23/23"),
  },
  {
    title: "Duskwood",
    storyteller: "Farias",
    system: "--",
    genders: [],
    date: new Date("09/23/23"),
  },
  {
    title: "RPG da Ju",
    storyteller: "Farias",
    system: "--",
    genders: [],
    date: new Date("09/23/23"),
  },
  {
    title: "Sombra e Ossos",
    storyteller: "Luana",
    system: "--",
    genders: [],
    date: new Date("09/23/23"),
  },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("name");
  const [searchVisibility, setSearchVisibility] = useState(false);

  const filteredStories = stories.filter((story) => {
    if (filterType === "gender") {
      const allLettersOnGendersList: string[] = [];

      story.genders.map((gender) => {
        for (let letter of gender) {
          allLettersOnGendersList.push(letter.toLowerCase());
        }
      });

      return allLettersOnGendersList.join("").includes(search.toLowerCase());
    } else if (filterType === "name") {
      const fullTitle = `${story.title} ${
        story.subtitle && `: ${story.subtitle}`
      }`;

      return fullTitle.toLowerCase().includes(search.toLowerCase());
    } else if (filterType === "storyteller") {
      const storyteller = story.storyteller
        .toLowerCase()
        .includes(search.toLowerCase());

      return storyteller;
    }
  });

  return (
    <main>
      <header className="w-full flex flex-col items-center gap-4 sticky top-0 bg-zinc-950">
        <div className="w-full px-12 pt-4 flex flex-row justify-between items-center">
          <h1 className="text-xl">
            <span className="font-bold">RPG</span>Note
          </h1>

          {/* <div className="flex flex-row">
            <select
              className="bg-zinc-800 h-10 rounded-l-full px-4 border-l border-t border-b"
              name="filterType"
              value={filterType}
              onChange={({ target }) => setFilterType(target.value)}
            >
              <option value="name">Nome</option>
              <option value="gender">Gênero</option>
              <option value="storyteller">Narrador</option>
            </select>
            <div className="border-[0.5px] border-t-zinc-50 border-b-zinc-50 border-zinc-500" />
            <input
              className="w-96 h-10 bg-zinc-800 border-r border-t border-b border-zinc-50 rounded-r-full px-4 outline-none"
              type="text"
              placeholder="Procure por uma historia gênero ou narrador"
              value={search}
              onChange={({ target }) => setSearch(target.value)}
            />
          </div> */}

          <button
            className="h-5 w-5 flex md:hidden"
            onClick={() => setSearchVisibility(!searchVisibility)}
          >
            <Search className="h-full w-full" />
          </button>

          <Input.Root className="hidden md:flex">
            <Input.Select
              onChange={({ target }) => setFilterType(target.value)}
              className="pl-4"
              list={[
                {
                  title: "Nome",
                  value: "name",
                },
                {
                  title: "Gênero",
                  value: "gender",
                },
                {
                  title: "Narrador",
                  value: "storyteller",
                },
              ]}
            />
            <div className="h-[70%] w-px mx-1 border border-zinc-400" />
            <Input.Field
              value={search}
              onChange={({ target }) => setSearch(target.value)}
              placeholder="Escreva aqui o que você busca"
            />
          </Input.Root>

          <div className="hidden md:w-[138.467px] md:flex md:flex-row md:items-center md:gap-4"></div>
        </div>
        <div
          className="w-[80%] md:w-[98%] h-fit group"
          data-SearchVisibility={searchVisibility}
        >
          <div className="w-full border border-zinc-700" />
          <div className="w-full h-fit bg-zinc-950 hidden group-data-[SearchVisibility=true]:flex flex-col py-4 gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-sm text-zinc-400">Tipo de busca:</span>
              <div
                className="bg-zinc-950 w-full  overflow-clip flex flex-row justify-center items-center rounded-lg border border-zinc-400 group"
                data-FilterType={filterType}
              >
                <button
                  className="w-full h-full py-1 bg-zinc-950 opacity-70 group-data-[FilterType=name]:bg-zinc-800 group-data-[FilterType=name]:opacity-100"
                  onClick={() => setFilterType("name")}
                >
                  Nome
                </button>
                <div className="h-8 w-px border border-zinc-400" />
                <button
                  className="w-full h-full py-1 bg-zinc-950 opacity-70 group-data-[FilterType=gender]:bg-zinc-800 group-data-[FilterType=gender]:opacity-100"
                  onClick={() => setFilterType("gender")}
                >
                  Gênero
                </button>
                <div className="h-8 w-px border border-zinc-400" />
                <button
                  className="px-2 w-full h-full py-1 bg-zinc-950 opacity-70 group-data-[FilterType=storyteller]:bg-zinc-800 group-data-[FilterType=storyteller]:opacity-100"
                  onClick={() => setFilterType("storyteller")}
                >
                  Narrador
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-sm text-zinc-400">
                Escreva aqui o que você busca:
              </span>
              <Input.Root className="h-8 w-full pl-2">
                <Search className="h-5 w-5" />
                <Input.Field
                  className="pl-2"
                  value={search}
                  onChange={({ target }) => setSearch(target.value)}
                />
              </Input.Root>
            </div>
          </div>
          <div className="w-full md:w-[98%] border border-zinc-700 group-data-[SearchVisibility=false]:hidden" />
        </div>
      </header>
      <div className="w-full flex-1 flex flex-row items-center justify-center flex-wrap p-8">
        {filteredStories.length !== 0 ? (
          <ul className="w-full md:w-[50%] flex flex-row gap-4 flex-wrap items-center justify-center">
            {filteredStories.map((story) => (
              <StoryCard key={story.title} {...story} />
            ))}
          </ul>
        ) : (
          <ul className="w-[50%] flex flex-row gap-4 flex-wrap items-center justify-center">
            <li className="w-full h-full flex flex-col gap-2 bg-zinc-900 p-5 rounded-sm border border-zinc-50">
              Nenhuma historia foi encontrada
            </li>
          </ul>
        )}
      </div>
    </main>
  );
}
