import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CommentsModule } from './comments/comments.module'
import { DatabaseModule } from './database/database.module'
import { DiscussionsModule } from './discussions/discussions.module'
import { OrganizationsModule } from './organizations/organizations.module'
import { ReportsModule } from './reports/reports.module'
import { TagsModule } from './tags/tags.module'
import { TeamsModule } from './teams/teams.module'
import { UsersModule } from './users/users.module'

let envFilePath = '.env'
if (process.env.DOTENV_FILE) {
    envFilePath = process.env.DOTENV_FILE
}

@Module({
    imports: [
        CommentsModule,
        ConfigModule.forRoot({
            envFilePath: envFilePath,
            isGlobal: true,
        }),
        DatabaseModule,
        DiscussionsModule,
        OrganizationsModule,
        ReportsModule,
        TagsModule,
        TeamsModule,
        UsersModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
