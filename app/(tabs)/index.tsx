import { data } from "@/constants/data";
import DetailsPage from "@/components/DetailsPage";

const webDevData = data.find((item) => item.name === "webdev");

export default function index() {
  return webDevData && <DetailsPage data={webDevData} />;
}
