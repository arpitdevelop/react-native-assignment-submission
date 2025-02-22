import React from "react";
import { data } from "@/constants/data";
import DetailsPage from "@/components/DetailsPage";

const pythonData = data.find((item) => item.name === "python");

export default function python() {
  return pythonData && <DetailsPage data={pythonData} />;
}
