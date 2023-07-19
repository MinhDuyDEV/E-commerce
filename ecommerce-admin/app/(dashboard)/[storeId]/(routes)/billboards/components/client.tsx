"use client";

import { Plus } from "lucide-react";
import { BillboardColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/DataTable";
import { useParams, useRouter } from "next/navigation";

import Heading from "@/components/ui/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ApiList } from "@/components/ui/api-list";

interface BillboardClientProps {
  data: BillboardColumn[];
}

const BillboardClient: React.FC<BillboardClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Billboard (${data.length})`}
          description="Manege billboard for your store"
        ></Heading>
        <Button
          onClick={() => router.push(`/${params.storeId}/billboards/new`)}
        >
          <Plus className="w-4 h-4 mr-2"></Plus>
          Add new
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="label" columns={columns} data={data}></DataTable>
      <Heading title="API" description="APIs calls for Billboards"></Heading>
      <Separator />
      <ApiList entityName="billboards" entityIdName="billboardId"></ApiList>
    </>
  );
};

export default BillboardClient;
