export interface newPurchase {
    name: string;
    piecesTypes: piecesType[];
}

export interface piecesType{
    street: string;
    postcode: string;
}