

export class TableMatches{
    id: number;
    name: string;
    items: Array<TableItem>;

}

export class TableItem{
    id: number;
    time: string;
    matches: Array<Matches>;
}

export class Matches{
    id: number;
    time: string;
    homeFc: string;
    homeLogo: string;
    homeResult: number;
    guestFc: string;
    guestLogo: string;
    guestResult: number;
}