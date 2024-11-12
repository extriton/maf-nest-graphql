import { CreateMinerShopInput } from "./dto/create-miner-shop.input";


export const initialData: CreateMinerShopInput[] = [
    {
        code: 'maf-miner-c100',
        level: 1,
        type: 'COIN',
        disabled: false
    },
    {
        code: 'maf-miner-u200',
        level: 1,
        type: 'NFT',
        disabled: true
    },
    {
        code: 'maf-miner-r300',
        level: 1,
        type: 'NFT',
        disabled: true
    },
    {
        code: 'maf-miner-e400',
        level: 1,
        type: 'NFT',
        disabled: true
    },
    {
        code: 'maf-miner-l500',
        level: 1,
        type: 'NFT',
        disabled: true
    }
]
