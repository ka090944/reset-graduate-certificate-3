
import Link from "next/link";
import graduates from "../../graduates";
import { notFound } from "next/navigation";

export default async function PortalPage({ params }) {
  const { slug } = await params;
  const graduate = graduates[slug];

  if (!graduate) {
    notFound();
  }

  return (
    <main className="certificate">
      <div className="certificate-inner">
        <p className="brand">RESET</p>

        <h1>GRADUATION</h1>
        <p className="subtitle">
          DIGITAL CERTIFICATE PORTAL
        </p>

        <div className="line" />

        <p className="message">
          RESETを卒業された皆様へ。
          <br />
          あなたの努力と成長の証を
          <br />
          ここに記録しています。
        </p>

        <Link
          href={`/graduate/${slug}`}
          style={{
            display: "inline-block",
            marginTop: "25px",
            padding: "15px 30px",
            background: "#a98a50",
            color: "#fff",
            textDecoration: "none",
            letterSpacing: "2px",
          }}
        >
          卒業証書を見る
        </Link>

        <p className="footer">
          RESET PERSONAL TRAINING
        </p>
      </div>
    </main>
  );
}
