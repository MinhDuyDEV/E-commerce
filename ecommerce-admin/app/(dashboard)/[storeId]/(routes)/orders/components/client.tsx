"use client";

import { OrderColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/DataTable";
import { useParams, useRouter } from "next/navigation";

import Heading from "@/components/ui/Heading";
import { Separator } from "@/components/ui/separator";

interface OrderClientProps {
  data: OrderColumn[];
}

const BillboardClient: React.FC<OrderClientProps> = ({ data }) => {
  return (
    <>
      <Heading
        title={`Products (${data.length})`}
        description="Manege products for your store"
      ></Heading>
      <Separator />
      <DataTable searchKey="products" columns={columns} data={data}></DataTable>
    </>
  );
};

export default BillboardClient;
