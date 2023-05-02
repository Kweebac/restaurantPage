import { createHome } from "./home";
import { createMenu } from "./menu";
import { createContact } from "./contact";
import { removePage } from "./remove-page";
import { buildPage } from "./build-page";

const page = {
  create: {
    home: createHome,
    menu: createMenu,
    contact: createContact,
  },
  remove: removePage,
  build: buildPage,
};

export { page };
