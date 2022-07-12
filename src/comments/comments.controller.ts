import { ActionEnum, ActivityFeed, EntityEnum, KysoCommentsCreateEvent, KysoCommentsDeleteEvent, KysoCommentsUpdateEvent, KysoEvent } from '@kyso-io/kyso-model'
import { Controller } from '@nestjs/common'
import { EventPattern } from '@nestjs/microservices'
import { DatabaseService } from '../database/database.service'

@Controller()
export class CommentsController {
    constructor(private databaseService: DatabaseService) {}

    @EventPattern(KysoEvent.COMMENTS_CREATE)
    async handleCommentsCreated(kysoCommentsCreateEvent: KysoCommentsCreateEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed()
        activityFeed.user_id = kysoCommentsCreateEvent.user.id
        activityFeed.entity = EntityEnum.COMMENT
        activityFeed.entity_id = kysoCommentsCreateEvent.comment.id
        activityFeed.action = ActionEnum.CREATE
        activityFeed.organization = kysoCommentsCreateEvent.organization.sluglified_name
        activityFeed.team = kysoCommentsCreateEvent.team.sluglified_name
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEvent.COMMENTS_UPDATE)
    async handleCommentsUpdated(kysoCommentsUpdateEvent: KysoCommentsUpdateEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed()
        activityFeed.user_id = kysoCommentsUpdateEvent.user.id
        activityFeed.entity = EntityEnum.COMMENT
        activityFeed.entity_id = kysoCommentsUpdateEvent.comment.id
        activityFeed.action = ActionEnum.UPDATE
        activityFeed.organization = kysoCommentsUpdateEvent.organization.sluglified_name
        activityFeed.team = kysoCommentsUpdateEvent.team.sluglified_name
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEvent.COMMENTS_DELETE)
    async handleCommentsDeleted(kysoCommentsDeleteEvent: KysoCommentsDeleteEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed()
        activityFeed.user_id = kysoCommentsDeleteEvent.user.id
        activityFeed.entity = EntityEnum.COMMENT
        activityFeed.entity_id = kysoCommentsDeleteEvent.comment.id
        activityFeed.action = ActionEnum.DELETE
        activityFeed.organization = kysoCommentsDeleteEvent.organization.sluglified_name
        activityFeed.team = kysoCommentsDeleteEvent.team.sluglified_name
        this.databaseService.insertActivityFeed(activityFeed)
    }
}
