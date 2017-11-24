export interface Menu{
    id: number;
    name: string; //Tên của menu
    active: boolean; 
    page: string; //Class của page
    link: string; //Link của page. Thường trùng với tên của template và ko có .html
}