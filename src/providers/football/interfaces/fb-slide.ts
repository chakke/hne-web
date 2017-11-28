export interface FBSlidesItem{
    nameOfClub1: string;
    nameOfClub2: string;
    numberOfHaft: number;
    arrayImage : Array<String>;
}
export interface FBSlides{
    id: string;
    items: Array<FBSlidesItem>;
}