import { createHome } from "./home";
import { createMenu } from "./menu";
import { removePage } from "./remove-page";

const page = {
  create: {
    home: createHome,
    menu: createMenu,
  },
  remove: removePage,
};

page.create.home();
page.remove();
page.create.menu();
