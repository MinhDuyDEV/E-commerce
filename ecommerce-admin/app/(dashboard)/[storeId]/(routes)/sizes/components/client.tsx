"use client";

import { Plus } from "lucide-react";
import { SizeColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/DataTable";
import { useParams, useRouter } from "next/navigation";

import Heading from "@/components/ui/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ApiList } from "@/components/ui/api-list";

interface SizeClientProps {
  data: SizeColumn[];
}

const SizeClient: React.FC<SizeClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Sizes (${data.length})`}
          description="Manege sizes for your store"
        ></Heading>
        <Button onClick={() => router.push(`/${params.storeId}/sizes/new`)}>
          <Plus className="w-4 h-4 mr-2"></Plus>
          Add new
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data}></DataTable>
      <Heading title="API" description="APIs calls for Sizes"></Heading>
      <Separator />
      <ApiList entityName="sizes" entityIdName="sizeId"></ApiList>
    </>
  );
};

export default SizeClient;
