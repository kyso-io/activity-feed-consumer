import { ActionEnum, ActivityFeed, EntityEnum, KysoEvent, KysoTagsEvent } from '@kyso-io/kyso-model'
import { Controller } from '@nestjs/common'
import { EventPattern } from '@nestjs/microservices'
import { DatabaseService } from '../database/database.service'

@Controller()
export class TagsController {
    constructor(private databaseService: DatabaseService) {}

    @EventPattern(KysoEvent.TAGS_CREATE)
    async handleTeamsCreated(kysoTagsEvent: KysoTagsEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed()
        activityFeed.user_id = kysoTagsEvent.user.id
        activityFeed.entity = EntityEnum.TAG
        activityFeed.entity_id = kysoTagsEvent.tag.id
        activityFeed.action = ActionEnum.CREATE
        this.databaseService.insertActivityFeed(activityFeed)
    }
}
