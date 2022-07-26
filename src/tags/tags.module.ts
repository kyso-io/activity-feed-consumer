import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'
import { TagsController } from './tags.controller'

@Module({
    imports: [DatabaseModule],
    controllers: [TagsController],
})
export class TagsModule {}
