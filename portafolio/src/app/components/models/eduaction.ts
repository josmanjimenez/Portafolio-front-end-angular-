export interface Education {
    id_education:          number;
    institution:           string;
    image_education:       string;
    title:                 string;
    start_date_education:  Date|string;
    ending_date_education: Date|string;
    finish:                boolean|string;
}