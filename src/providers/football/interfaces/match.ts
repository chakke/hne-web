
export enum MatchStatus{
    WAITING, PLAYING, DONE
}

export class Match{
    id: number;
    time: string;
    homeFc: string;
    homeLogo: string;
    homeResult: string;
    guestFc: string;
    guestLogo: string;
    guestResult: string;
    detail: string;
}

export class ScheduleMatch{
    id: number;
    time: string;
    homeId: number;
    homeFc: string;
    homeLogo: string;
    homeResult: string;
    guestId: number;
    guestFc: string;
    guestLogo: string;
    guestResult: string;
    stadium: string;
    status: MatchStatus;
}

export class ScheduleItem{
    id: number;
    time: string;
    matches: Array<ScheduleMatch>;
}