export interface iCoords{
  bottom: number;
  top: number;
  left: number;
  right: number;
  height: number;
  width: number
}
export function getElemCoords(elem): iCoords{
  return  elem.getBoundingClientRect()
}
