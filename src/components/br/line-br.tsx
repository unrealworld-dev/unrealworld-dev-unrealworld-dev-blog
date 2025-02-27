export default function LineBar({
  classname,
}: Readonly<{
  classname?: string;
}>) {
  return (
    <div className={`relative w-full h-2 bg-slate-300 ${classname}`}>
    </div>
  );
}
