import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class HistoryVoting1698956838540 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "history_voting",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "type",
                        type: "int",
                    },
                    {
                        name: "comments",
                        type: "text",
                    },
                    {
                        name: "ip_client",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("history_voting")
    }

}
