import Image from "next/image";
import data from "../../public/inputData.json";
import SectionMainView from "@/components/sectionMainView";
import { Section } from "@/types/section";
import { getWidgets } from "@/logic/widget";

export default async function Home() {
  const dataAPI = await getWidgets();
  return (
    <SectionMainView section={data as unknown as Section}></SectionMainView>
  );
}
