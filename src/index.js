import { createHome } from "./home";
import { removePage } from "./remove-page";

const page = {
  create: {
    home: createHome,
  },
  removePage,
};

page.create.home();
// page.removePage();
