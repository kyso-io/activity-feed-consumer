import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CommentsModule } from './comments/comments.module'
import { DatabaseModule } from './database/database.module'
import { DiscussionsModule } from './discussions/discussions.module'
import { OrganizationsModule } from './organizations/organizations.module'
import { ReportsModule } from './reports/reports.module'
import { TeamsModule } from './teams/teams.module'
import { UsersModule } from './users/users.module'

@Module({
    imports: [
        CommentsModule,
        ConfigModule.forRoot({
            envFilePath: '.env',
            isGlobal: true,
        }),
        DatabaseModule,
        DiscussionsModule,
        OrganizationsModule,
        ReportsModule,
        TeamsModule,
        UsersModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
