import { Wine } from "phosphor-react";

export function ItemList() {
  const isDrinkIncluded = true;

  return (
    <div className="py-[10px] flex items-center justify-between">
      <div className="flex items-center gap-3">
        <input type="checkbox" name="" id="" />
        <span className="text-xl font-medium text-black/80">Ronald</span>
        {isDrinkIncluded && (
          <span className="text-black cursor-pointer" title="Bebida inclusa">
            <Wine size={24} weight="fill" />
          </span>
        )}
      </div>

      <span className="text-xl font-medium text-black/80">R$ 20,00</span>
    </div>
  );
}
