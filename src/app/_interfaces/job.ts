export interface Job{
    date?: Date | null;
    partNumber?: string | null;
    quantity?: number | null;
    startTime?: Date | null;
    finishTime?: Date | null;
    packCode?: string |null;
    packQty?: number | null;
    points?: number;
}