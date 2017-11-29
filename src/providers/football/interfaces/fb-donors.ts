export interface Donors{
    image: string;
    name: string;
}

export interface DonorsList{
    id: number;
    list: Array<Donors>;
}