export interface Video{
    id: string;
    videoURL: string;
    imgURL: string;
    title: string;
    description: string;
    date: string;
    duration: string;
}

export interface Videos{
    id: string;
    name: string;
    items: Array<Video>;
}