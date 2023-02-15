export interface iPlan{
    id: number;
    name: string;
    tasks: iTask[];
}

export interface iTask{
    name: string;
    time?: string;
    important: boolean;
}