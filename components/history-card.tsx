import dayjs from "dayjs";
import { HistoryProps } from "../app/page";
import Badge from "./badge";

export default function HistoryCard(props: HistoryProps) {
  return (
    <li className="flex flex-col gap-1 bg-zinc-900 p-5 rounded-sm border border-zinc-50">
      <header>
        <span className="font-bold text-xl">
          {props.title}
          {props.subtitle && `: ${props.subtitle}`}
        </span>
      </header>
      <main>
        <div>
          <span className="font-bold">Sistema:</span> {props.system}
        </div>
        <div>
          <span className="font-bold">Gêneros: </span>
          <div className="flex flex-row gap-2">
            {props.genders.length !== 0 ? (
              props.genders.map((gender) => {
                return <Badge title={gender} />;
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
