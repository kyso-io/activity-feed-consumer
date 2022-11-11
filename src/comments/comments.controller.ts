import { ActionEnum, ActivityFeed, EntityEnum, KysoCommentsCreateEvent, KysoCommentsDeleteEvent, KysoCommentsUpdateEvent, KysoEventEnum } from '@kyso-io/kyso-model'
import { Controller } from '@nestjs/common'
import { EventPattern } from '@nestjs/microservices'
import { DatabaseService } from '../database/database.service'

@Controller()
export class CommentsController {
    constructor(private databaseService: DatabaseService) {}

    @EventPattern(KysoEventEnum.COMMENTS_CREATE)
    async handleCommentsCreated(kysoCommentsCreateEvent: KysoCommentsCreateEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed(
            kysoCommentsCreateEvent.user.id,
            kysoCommentsCreateEvent.organization.sluglified_name,
            kysoCommentsCreateEvent.team.sluglified_name,
            EntityEnum.COMMENT,
            kysoCommentsCreateEvent.comment.id,
            ActionEnum.CREATE,
            false,
            [],
        )
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.COMMENTS_UPDATE)
    async handleCommentsUpdated(kysoCommentsUpdateEvent: KysoCommentsUpdateEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed(
            kysoCommentsUpdateEvent.user.id,
            kysoCommentsUpdateEvent.organization.sluglified_name,
            kysoCommentsUpdateEvent.team.sluglified_name,
            EntityEnum.COMMENT,
            kysoCommentsUpdateEvent.comment.id,
            ActionEnum.UPDATE,
            false,
            [],
        )
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.COMMENTS_DELETE)
    async handleCommentsDeleted(kysoCommentsDeleteEvent: KysoCommentsDeleteEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed(
            kysoCommentsDeleteEvent.user.id,
            kysoCommentsDeleteEvent.organization.sluglified_name,
            kysoCommentsDeleteEvent.team.sluglified_name,
            EntityEnum.COMMENT,
            kysoCommentsDeleteEvent.comment.id,
            ActionEnum.DELETE,
            false,
            [],
        )
        this.databaseService.insertActivityFeed(activityFeed)
    }
}
