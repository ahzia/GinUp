import { Hub } from "@/models/Hub";
import HubCard from "./HubCard";
import HubsSlider from "./HubsSlider";
import Link from "next/link";
import classNames from "classnames";

interface Category {
  title: string;
  hubs: Hub[];
}

interface HubsCategoriesProps {
  categories: Category[];
}

export default function HubsCategories({ categories }: HubsCategoriesProps) {
  return (
    <div className="space-y-10">
      {categories &&
        categories.map((category) => (
          <div key={category.title}>
            <div className={classNames("flex items-center mb-5",
              category.title === "Plans for you" ? "justify-center" : "justify-between"
            )}>
              <h2 className="text-xl font-semibold text-primary">
                {category.title}
              </h2>
              {category.title !== "Plans for you" && (
                <Link href="#" className="text-highlight text-sm font-bold underline">
                  See More
                </Link>
              )}
            </div>
            {category.title === "Plans for you" ? (
              <HubsSlider hubs={category.hubs} />
            ) : (
              <div className="overflow-x-auto">
                <div className="flex space-x-4 min-h-[350px]">
                  {category.hubs.map((hub) => (
                    <div
                      key={hub.hub_id}
                      className="min-w-[300px] max-w-[300px] flex-shrink-0"
                    >
                      <HubCard hub={hub} />
                      {hub.description}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
    </div>
  );
}
