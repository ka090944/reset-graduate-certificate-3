
import graduates from "../../graduates";
import { notFound } from "next/navigation";

export default async function GraduatePage({ params }) {
  const { slug } = await params;
  const graduate = graduates[slug];

  if (!graduate) {
    notFound();
  }

  return (
    <main className="certificate">
      <div className="certificate-inner">
        <p className="brand">RESET</p>

        <h1>CERTIFICATE</h1>
        <p className="subtitle">GRADUATION CERTIFICATE</p>

        <div className="line" />

        <p className="label">卒業生</p>
        <h2>{graduate.name} 様</h2>

        <div className="message">
          <p>あなたは90日間のプログラムを通して</p>
          <p>身体作りの知識と習慣を習得されました。</p>
          <p>ここにその努力を称え、卒業を証します。</p>
        </div>

        <div className="line" />

        <p className="label">卒業日</p>
        <p className="date">{graduate.date}</p>

        <p className="label trainer-label">
          RESET代表トレーナー
        </p>
        <p className="trainer">渡邊 魁</p>

        <p className="footer">RESET PERSONAL TRAINING</p>
      </div>
    </main>
  );
}
