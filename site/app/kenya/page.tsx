// @ts-ignore
import kenyaData from "../data/kenya.json";

export default function KenyaPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Kenya Trends & Insights</h2>

      {kenyaData.indicators.map((ind: any, idx: number) => (
        <div key={idx} className="border p-4 rounded">
          <h3 className="font-semibold">{ind.name}</h3>
          <p>
            {ind.value} {ind.unit} ({ind.year})
          </p>
          <p className="text-sm text-gray-500">
            Source: {ind.source}
          </p>
        </div>
      ))}
    </div>
  );
}
