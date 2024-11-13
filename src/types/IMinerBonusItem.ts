import { TMinerItemType } from "src/types/TMinerItemType"
import { TMinerSlot } from "./TMinerSlot"

export interface IMinerBonusItem {
    code: string,
    level: number,
    type: TMinerItemType,
    slot: TMinerSlot
}