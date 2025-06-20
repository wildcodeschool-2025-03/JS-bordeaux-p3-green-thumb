// to make the file a module and avoid the TypeScript error
export type {};

declare global {
  type plant = {
    id: number;
    name: string;
    icon: string;
    description: string;
    plant_exposition: string;
    sowing: string;
    watering: number;
    harvesting: number;
    toxic: boolean;
    edible: boolean;
  };
  namespace Express {
    export interface Request {
      /* ************************************************************************* */
      // Add your custom properties here, for example:
      //
      // user?: { ... }
      /* ************************************************************************* */
    }
  }
}
