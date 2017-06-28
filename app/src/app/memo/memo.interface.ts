export interface newMemo {
    memo_invoice_number: string;
    no_of_days: number;
    due_date:string;
    date:string;
    account_name:string;
    broker:string;
    reference:string;
    piecesTypes: memoDetails[];
}

export interface memoDetails{
    PCS_ID: number;
    Lot_Number: number;
    carats: number;
    stone_type:string
}