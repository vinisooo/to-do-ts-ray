export interface iPlan{
    id: number;
    name: string;
    tasks: iTask[];
}

export interface iTask{
    name: string;
    date?: string;
    important: boolean;
}