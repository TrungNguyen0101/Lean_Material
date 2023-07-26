"use client";
import Image from "next/image";
import BlockAutocomplete from "@/components/InputAutocomplete";
import FormCheckbox from "@/components/InputCheckbox";
import BlockRating from "@/components/InputRating";
import BlockVolume from "@/components/InputVolume";
import BlockSwitch from "@/components/InputSwitch";
import DataBadge from "@/components/DataBadge";
import DataTable from "@/components/DataTable";
import DataTooltip from "@/components/DataTooltip";
import FeedBackBackdrops from "@/components/FeedBackBackdrop";
import FeedBackDialog from "@/components/FeedBackDialog";
import FeedBackProgress from "@/components/FeedBackProgress";
import Circular from "@/components/FeedBackProgress/Circular";
import SurfacesAccordion from "@/components/SurfacesAccordion";
export default function Home() {
  return (
    <main className="flex flex-wrap min-h-screen p-[20px] gap-x-[20px] gap-y-[30px]">
      <div>
        <b className="mb-[10px] inline-block text-red-500">Autocomplete</b>
        <BlockAutocomplete></BlockAutocomplete>
      </div>
      <div>
        <b className="mb-[10px] inline-block text-red-500">InputCheckbox</b>
        <FormCheckbox></FormCheckbox>
      </div>
      <div>
        <b className="mb-[10px] inline-block text-red-500">InputRating</b>
        <BlockRating></BlockRating>
      </div>
      <div>
        <b className="mb-[10px] inline-block text-red-500">InputVolume</b>
        <BlockVolume></BlockVolume>
      </div>
      <div>
        <b className="mb-[10px] inline-block text-red-500">InputSwitch</b>
        <BlockSwitch></BlockSwitch>
      </div>
      <div>
        <b className="mb-[10px] inline-block text-red-500">DataBadge</b>
        <DataBadge></DataBadge>
      </div>

      <div>
        <b className="mb-[10px] inline-block text-red-500">DataTooltip</b>
        <DataTooltip></DataTooltip>
      </div>
      <div>
        <b className="mb-[10px] inline-block text-red-500">FeedBackBackdrops</b>
        <FeedBackBackdrops></FeedBackBackdrops>
      </div>
      <div>
        <b className="mb-[10px] inline-block text-red-500">FeedBackDialog</b>
        <FeedBackDialog></FeedBackDialog>
      </div>
      <div className="flex flex-col gap-y-[20px]">
        <div>
          <b className="mb-[10px] inline-block text-red-500">
            FeedBackProgressLine
          </b>
          <FeedBackProgress></FeedBackProgress>
        </div>
        <div>
          <b className="mb-[10px] inline-block text-red-500">
            FeedBackProgressCircular
          </b>
          <Circular></Circular>
        </div>
      </div>
      <div className="overflow-x-auto">
        <b className="mb-[10px] inline-block text-red-500">DataTable</b>
        <DataTable></DataTable>
      </div>
      <div className="w-[40%]">
        <b className="mb-[10px] inline-block text-red-500">SurfacesAccordion</b>
        <SurfacesAccordion></SurfacesAccordion>
      </div>
    </main>
  );
}
