import { Header } from "../../../../components/Header";
import { ArrowLeft } from "phosphor-react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

export function DetailsWithoutContentSkeleton() {
  return (
    <div className="min-h-screen">
      <Header className="h-80 pt-[70px] bg-barbecue bg-yellow" />
      <main className={`-mt-28`}>
        <div className="px-6">
          <div className="mb-6 flex flex-col gap-2 sm:justify-between sm:flex-row">
            <Link
              to="/dashboard"
              title="Voltar para o inicio"
              className="h-[50px] px-5 transparent text-black hover:bg-black hover:text-white border border-black transition-colors flex items-center justify-center gap-2 text-xs font-bold uppercase rounded md:text-sm"
            >
              <ArrowLeft size={24} />
              Voltar
            </Link>
          </div>

          <div className="bg-white shadow-md p-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <Skeleton width={84} height={33} />

                <Skeleton width={124} height={25} />

                <Skeleton count={2} width={200} height={25} />
              </div>

              <div className="flex flex-col gap-4">
                <Skeleton width={94} height={25} />

                <Skeleton width={94} height={25} />
              </div>
            </div>

            <div className="mt-10">
              <div className="flex flex-col divide-y">
                <Skeleton count={5} height={30} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
