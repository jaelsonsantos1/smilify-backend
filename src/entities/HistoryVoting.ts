import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("history_voting")
export class HistoryVoting {
    
    @PrimaryColumn()
    id: string;

    @Column()
    type: number;
    
    @Column()
    comments: string;

    @Column()
    ip_client: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid(); 
        }
    }
}