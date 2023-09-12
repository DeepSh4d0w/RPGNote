import dayjs from "dayjs";
import { storyProps } from "../models/story";
import Badge from "./badge";

export default function StoryCard(props: storyProps) {
  return (
    <li className="w-full h-full flex flex-col gap-2 bg-zinc-900 p-5 rounded-sm border border-zinc-50">
      <header className="flex flex-col gap-1">
        <span className="font-bold text-xl">
          {props.title}
          {props.subtitle && `: ${props.subtitle}`}
        </span>
        {props.description && (
          <span className="text-sm text-zinc-300">{props.description}</span>
        )}

        <div className="w-[98%] border border-zinc-700" />
      </header>
      <main>
        <div>
          <span className="font-bold">Narrador:</span> {props.storyteller}
        </div>
        <div>
          <span className="font-bold">Sistema:</span> {props.system}
        </div>
        <div>
          <span className="font-bold">Gêneros: </span>
          <div className="flex flex-row gap-2">
            {props.genders.length !== 0 ? (
              props.genders.map((gender) => {
                return <Badge key={gender} title={gender} />;
              })
            ) : (
              <span>--</span>
            )}
          </div>
        </div>
        <div>
          <span className="font-bold">Data: </span>{" "}
          {props.date ? dayjs(props.date).format("DD/MM/YY").toString() : "--"}
        </div>
      </main>
    </li>
  );
}
