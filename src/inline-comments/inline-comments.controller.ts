import { ActionEnum, ActivityFeed, EntityEnum, InlineComment, KysoCommentsCreateEvent, KysoCommentsDeleteEvent, KysoCommentsUpdateEvent, KysoEventEnum } from '@kyso-io/kyso-model'
import { Controller } from '@nestjs/common'
import { EventPattern } from '@nestjs/microservices'
import { DatabaseService } from '../database/database.service'

@Controller()
export class InlineCommentsController {
    constructor(private databaseService: DatabaseService) {}

    @EventPattern(KysoEventEnum.INLINE_COMMENTS_CREATE)
    async handleInlineCommentsCreated(kysoCommentsCreateEvent: KysoCommentsCreateEvent) {
        const inlineComment: InlineComment = kysoCommentsCreateEvent.comment as InlineComment
        const activityFeed: ActivityFeed = new ActivityFeed(
            kysoCommentsCreateEvent.user.id,
            kysoCommentsCreateEvent.organization.sluglified_name,
            kysoCommentsCreateEvent.team.sluglified_name,
            EntityEnum.INLINE_COMMENT,
            inlineComment.id,
            ActionEnum.CREATE,
            false,
            [],
        )
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.INLINE_COMMENTS_REPLY)
    async handleInlineCommentsReplied(kysoCommentsCreateEvent: KysoCommentsCreateEvent) {
        const inlineComment: InlineComment = kysoCommentsCreateEvent.comment as InlineComment
        const activityFeed: ActivityFeed = new ActivityFeed(
            kysoCommentsCreateEvent.user.id,
            kysoCommentsCreateEvent.organization.sluglified_name,
            kysoCommentsCreateEvent.team.sluglified_name,
            EntityEnum.INLINE_COMMENT,
            inlineComment.id,
            ActionEnum.REPLY,
            false,
            [],
        )
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.INLINE_COMMENTS_UPDATE)
    async handleInlineCommentsUpdated(kysoCommentsUpdateEvent: KysoCommentsUpdateEvent) {
        const inlineComment: InlineComment = kysoCommentsUpdateEvent.comment as InlineComment
        const activityFeed: ActivityFeed = new ActivityFeed(
            kysoCommentsUpdateEvent.user.id,
            kysoCommentsUpdateEvent.organization.sluglified_name,
            kysoCommentsUpdateEvent.team.sluglified_name,
            EntityEnum.INLINE_COMMENT,
            inlineComment.id,
            inlineComment.parent_comment_id === null ? ActionEnum.UPDATE : ActionEnum.UPDATE_REPLY,
            false,
            [],
        )
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.INLINE_COMMENTS_CHANGE_STATUS)
    async handleInlineCommentsChangeStatus(kysoCommentsUpdateEvent: KysoCommentsUpdateEvent) {
        const inlineComment: InlineComment = kysoCommentsUpdateEvent.comment as InlineComment
        const activityFeed: ActivityFeed = new ActivityFeed(
            kysoCommentsUpdateEvent.user.id,
            kysoCommentsUpdateEvent.organization.sluglified_name,
            kysoCommentsUpdateEvent.team.sluglified_name,
            EntityEnum.INLINE_COMMENT,
            inlineComment.id,
            ActionEnum.CHANGE_STATUS,
            false,
            [],
        )
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.INLINE_COMMENTS_DELETE)
    async handleInlineCommentsDeleted(kysoCommentsDeleteEvent: KysoCommentsDeleteEvent) {
        const inlineComment: InlineComment = kysoCommentsDeleteEvent.comment as InlineComment
        const activityFeed: ActivityFeed = new ActivityFeed(
            kysoCommentsDeleteEvent.user.id,
            kysoCommentsDeleteEvent.organization.sluglified_name,
            kysoCommentsDeleteEvent.team.sluglified_name,
            EntityEnum.INLINE_COMMENT,
            inlineComment.id,
            ActionEnum.DELETE,
            false,
            [],
        )
        this.databaseService.insertActivityFeed(activityFeed)
    }
}
