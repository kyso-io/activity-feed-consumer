import { ActionEnum, ActivityFeed, EntityEnum, KysoEventEnum, KysoTagsEvent } from '@kyso-io/kyso-model'
import { Controller } from '@nestjs/common'
import { EventPattern } from '@nestjs/microservices'
import { DatabaseService } from '../database/database.service'

@Controller()
export class TagsController {
    constructor(private databaseService: DatabaseService) {}

    @EventPattern(KysoEventEnum.TAGS_CREATE)
    async handleTeamsCreated(kysoTagsEvent: KysoTagsEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed(kysoTagsEvent.user.id, null, null, EntityEnum.TAG, kysoTagsEvent.tag.id, ActionEnum.CREATE, false, [])
        this.databaseService.insertActivityFeed(activityFeed)
    }
}
