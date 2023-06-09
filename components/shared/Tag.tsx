import React from "react";
import { AgendaCategory } from "@/config/types";

interface TTag {
  category: AgendaCategory| undefined;
  day: string | undefined;
}

const tag = ({ category, day }: TTag) => {
  return (
    <>
    {
        category ? (<p
            className={` py-2 px-3 ${getAgendaCategoryStyle(
                category
              ) } self-end rounded-xl whitespace-nowrap text-body-sm text-sc-10 font-p-medium tag-padding`}
          >
            {category}
          </p> ): day !=  undefined ?
          <p
          className={` py-2 px-3 bg-purple-20 self-end rounded-xl whitespace-nowrap text-body-sm text-sc-10 font-p-medium tag-padding`}
        >
          {day}
        </p> : null
    }
    </>
  );
};

export default tag;

function getAgendaCategoryStyle(category?: AgendaCategory) {
	if (category === AgendaCategory.workshop) {
		return 'bg-yellow-20';
	} else if (category === AgendaCategory.Keynote) {
		return 'bg-red-20';
	} else if (category === AgendaCategory.panelSession) {
		return 'bg-green-20';
	}else if (category === AgendaCategory.network) {
		return 'bg-tc-10';
	}
}
