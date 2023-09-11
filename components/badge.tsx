export default function badge({ title }: { title: string }) {
  return (
    <span className="bg-zinc-800 p-[3px] rounded-sm text-sm">{title}</span>
  );
}
