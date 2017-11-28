
export interface TableItem {
    id: string;
    clubId: string;
    clubName: string;
    clubLogo: string;
    won: number;
    lost: number;
    draw: number;
    goalsScore: number;
    goalsLost: number;
    point: number; 
    rankChange: string;
}

export interface Table {
    id: string;
    name: string;
    items: Array<TableItem>;
}