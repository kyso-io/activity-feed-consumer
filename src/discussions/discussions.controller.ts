import {
    ActionEnum,
    ActivityFeed,
    KysoDiscussionsAssigneeEvent,
    KysoDiscussionsCreateEvent,
    KysoDiscussionsDeleteEvent,
    KysoDiscussionsNewMentionEvent,
    KysoDiscussionsUpdateEvent,
    KysoEventEnum,
} from '@kyso-io/kyso-model'
import { EntityEnum } from '@kyso-io/kyso-model/dist/enums/entity.enum'
import { Controller } from '@nestjs/common'
import { EventPattern } from '@nestjs/microservices'
import { DatabaseService } from '../database/database.service'

@Controller()
export class DiscussionsController {
    constructor(private databaseService: DatabaseService) {}

    @EventPattern(KysoEventEnum.DISCUSSIONS_CREATE)
    async handleDiscussionsCreated(kysoDiscussionsCreateEvent: KysoDiscussionsCreateEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed(
            kysoDiscussionsCreateEvent.user.id,
            kysoDiscussionsCreateEvent.organization.sluglified_name,
            kysoDiscussionsCreateEvent.team.sluglified_name,
            EntityEnum.DISCUSSION,
            kysoDiscussionsCreateEvent.discussion.id,
            ActionEnum.CREATE,
            false,
            [],
        )
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.DISCUSSIONS_UPDATE)
    async handleDiscussionsUpdated(kysoDiscussionsUpdateEvent: KysoDiscussionsUpdateEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed(
            kysoDiscussionsUpdateEvent.user.id,
            kysoDiscussionsUpdateEvent.organization.sluglified_name,
            kysoDiscussionsUpdateEvent.team.sluglified_name,
            EntityEnum.DISCUSSION,
            kysoDiscussionsUpdateEvent.discussion.id,
            ActionEnum.UPDATE,
            false,
            [],
        )
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.DISCUSSIONS_DELETE)
    async handleDiscussionsDeleted(kysoDiscussionsDeleteEvent: KysoDiscussionsDeleteEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed(
            kysoDiscussionsDeleteEvent.user.id,
            kysoDiscussionsDeleteEvent.organization.sluglified_name,
            kysoDiscussionsDeleteEvent.team.sluglified_name,
            EntityEnum.DISCUSSION,
            kysoDiscussionsDeleteEvent.discussion.id,
            ActionEnum.DELETE,
            false,
            [],
        )
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.DISCUSSIONS_NEW_ASSIGNEE)
    async handleDiscussionsNewAssignee(kysoDiscussionsAssigneeEvent: KysoDiscussionsAssigneeEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed(
            kysoDiscussionsAssigneeEvent.assigneeUser.id,
            kysoDiscussionsAssigneeEvent.organization.sluglified_name,
            kysoDiscussionsAssigneeEvent.team.sluglified_name,
            EntityEnum.DISCUSSION,
            kysoDiscussionsAssigneeEvent.discussion.id,
            ActionEnum.NEW_ASSIGNMENT,
            false,
            [],
        )
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.DISCUSSIONS_REMOVE_ASSIGNEE)
    async handleDiscussionsRemoveAssignee(kysoDiscussionsAssigneeEvent: KysoDiscussionsAssigneeEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed(
            kysoDiscussionsAssigneeEvent.assigneeUser.id,
            kysoDiscussionsAssigneeEvent.organization.sluglified_name,
            kysoDiscussionsAssigneeEvent.team.sluglified_name,
            EntityEnum.DISCUSSION,
            kysoDiscussionsAssigneeEvent.discussion.id,
            ActionEnum.REMOVE_ASSIGNMENT,
            false,
            [],
        )
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.DISCUSSIONS_NEW_MENTION)
    async handleDiscussionsNewMention(kysoDiscussionsNewMentionEvent: KysoDiscussionsNewMentionEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed(
            kysoDiscussionsNewMentionEvent.user.id,
            kysoDiscussionsNewMentionEvent.organization.sluglified_name,
            kysoDiscussionsNewMentionEvent.team.sluglified_name,
            EntityEnum.DISCUSSION,
            kysoDiscussionsNewMentionEvent.discussion.id,
            ActionEnum.NEW_MENTION,
            false,
            [],
        )
        this.databaseService.insertActivityFeed(activityFeed)
    }
}
