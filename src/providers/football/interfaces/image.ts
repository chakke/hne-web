

export class Image{
    id: number;
    name: string;
    url: string;
}

export class Galery{
    id: number;
    title: string;
    images: Array<Image>;
}

export class GaleryArr{
    galeries: Array<GaleryElement>;
}

export class GaleryElement{
    id: number;
    title: string;
    image: Image;
}