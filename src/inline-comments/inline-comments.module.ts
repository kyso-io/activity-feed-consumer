import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'
import { InlineCommentsController } from './inline-comments.controller'

@Module({
    imports: [DatabaseModule],
    controllers: [InlineCommentsController],
})
export class InlineCommentsModule {}
