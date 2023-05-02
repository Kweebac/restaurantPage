import { createHome } from "./home";
import { createMenu } from "./menu";
import { createContact } from "./contact";
import { removePage } from "./remove-page";

const page = {
  create: {
    home: createHome,
    menu: createMenu,
    contact: createContact,
  },
  remove: removePage,
};

page.create.contact();
