export type {};

declare global {
  type Plant = {
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
  interface PlantGardenEntry {
    garden_id: number;
    plant_id: number;
  }

  export type MyPayload = JwtPayload & { sub: string };

  namespace Express {
    export interface Request {
      /* ************************************************************************* */
      // Add your custom properties here, for example:
      //
      auth: MyPayload;
      /* ************************************************************************* */
    }
  }
}
