import theme from "styles/themes";
import {} from "styled-components";

declare module "styled-components" {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}
