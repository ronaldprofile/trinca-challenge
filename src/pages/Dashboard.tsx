import { Card } from "../components/Card";
import { Header } from "../components/Header";

export function Dashboard() {
  return (
    <div className={`min-h-screen `}>
      <Header className={`pt-[70px] h-80 bg-barbecue bg-yellow`} />

      <main className={`h-full -mt-12`}>
        <div className={`px-6  grid  grid-cols-2 md:grid-cols-3 gap-6`}>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </div>
  );
}
