export class News{
    id: string;
    title: string;
    newDetail: Array<NewDetail>;
    date: string;
    comment: number;
    tag: string;
    constructor(data?: any){
        this.id = "";
        this.title = "";
        this.newDetail = [{
            description: "",
            pictureUrl: ""
        }];
        this.date = "";
        this.comment = 0;
        this.tag ="";
        if(data){
            this.pair(data);
        }
    }
    pair(data: any){
        if(data.id)this.id = data.id;
        if(data.title)this.title = data.title;
        if(data.newDetail)this.newDetail = data.newDetail;
        if(data.date)this.date = data.date;
        if(data.comment) this.comment = data.comment;
        if(data.tag)this.tag = data.tag;
    }
}

export interface NewDetail{
    description: string;
    pictureUrl: string;
}

export interface NewsInterface{
    id: string;
    name: string;
    items: Array<News>;
}