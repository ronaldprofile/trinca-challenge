import { useParams } from "react-router-dom";
import { useGetBarbecueById } from "../../hooks/barbecue/get-barbecue-by-id";
import { Header } from "../../components/Header";

import { DetailsWithoutContentSkeleton } from "./components/DetailsWithoutContentSkeleton";
import { BarbecueInfo } from "./components/BarbecueInfo";
import { ListMembers } from "./components/ListMembers";
import { HeaderActions } from "./components/HeaderActions";

export function Details() {
  const { id: barbecueId } = useParams();

  const {
    data: barbecue,
    isLoading,
    isFetching: isFetchingBarbecue,
  } = useGetBarbecueById(barbecueId);

  if (!barbecue) {
    return <DetailsWithoutContentSkeleton />;
  }

  const membersQuantity = barbecue.members.length;

  return (
    <div className="min-h-screen">
      <Header className="h-80 pt-[70px] bg-barbecue bg-yellow" />

      <main className={`-mt-28`}>
        <div className={`px-6`}>
          <HeaderActions barbecueId={barbecueId} />

          <div className="bg-white shadow-md p-6">
            <BarbecueInfo
              title={barbecue.title}
              description={barbecue.description}
              amount_collected={barbecue.amount_collected}
              scheduled_day={barbecue.scheduled_day}
              membersQuantity={membersQuantity}
              isFetchingBarbecue={isFetchingBarbecue}
            />

            {!isLoading && (
              <ListMembers
                members={barbecue.members}
                isFetchingBarbecue={isFetchingBarbecue}
                barbecueId={barbecueId}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
