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
        const activityFeed: ActivityFeed = new ActivityFeed()
        activityFeed.user_id = kysoDiscussionsCreateEvent.user.id
        activityFeed.entity = EntityEnum.DISCUSSION
        activityFeed.entity_id = kysoDiscussionsCreateEvent.discussion.id
        activityFeed.action = ActionEnum.CREATE
        activityFeed.organization = kysoDiscussionsCreateEvent.organization.sluglified_name
        activityFeed.team = kysoDiscussionsCreateEvent.team.sluglified_name
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.DISCUSSIONS_UPDATE)
    async handleDiscussionsUpdated(kysoDiscussionsUpdateEvent: KysoDiscussionsUpdateEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed()
        activityFeed.user_id = kysoDiscussionsUpdateEvent.user.id
        activityFeed.entity = EntityEnum.DISCUSSION
        activityFeed.entity_id = kysoDiscussionsUpdateEvent.discussion.id
        activityFeed.action = ActionEnum.UPDATE
        activityFeed.organization = kysoDiscussionsUpdateEvent.organization.sluglified_name
        activityFeed.team = kysoDiscussionsUpdateEvent.team.sluglified_name
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.DISCUSSIONS_DELETE)
    async handleDiscussionsDeleted(kysoDiscussionsDeleteEvent: KysoDiscussionsDeleteEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed()
        activityFeed.user_id = kysoDiscussionsDeleteEvent.user.id
        activityFeed.entity = EntityEnum.DISCUSSION
        activityFeed.entity_id = kysoDiscussionsDeleteEvent.discussion.id
        activityFeed.action = ActionEnum.DELETE
        activityFeed.organization = kysoDiscussionsDeleteEvent.organization.sluglified_name
        activityFeed.team = kysoDiscussionsDeleteEvent.team.sluglified_name
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.DISCUSSIONS_NEW_ASSIGNEE)
    async handleDiscussionsNewAssignee(kysoDiscussionsAssigneeEvent: KysoDiscussionsAssigneeEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed()
        activityFeed.user_id = kysoDiscussionsAssigneeEvent.assigneeUser.id
        activityFeed.entity = EntityEnum.DISCUSSION
        activityFeed.entity_id = kysoDiscussionsAssigneeEvent.discussion.id
        activityFeed.action = ActionEnum.NEW_ASSIGNMENT
        activityFeed.organization = kysoDiscussionsAssigneeEvent.organization.sluglified_name
        activityFeed.team = kysoDiscussionsAssigneeEvent.team.sluglified_name
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.DISCUSSIONS_REMOVE_ASSIGNEE)
    async handleDiscussionsRemoveAssignee(kysoDiscussionsAssigneeEvent: KysoDiscussionsAssigneeEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed()
        activityFeed.user_id = kysoDiscussionsAssigneeEvent.assigneeUser.id
        activityFeed.entity = EntityEnum.DISCUSSION
        activityFeed.entity_id = kysoDiscussionsAssigneeEvent.discussion.id
        activityFeed.action = ActionEnum.REMOVE_ASSIGNMENT
        activityFeed.organization = kysoDiscussionsAssigneeEvent.organization.sluglified_name
        activityFeed.team = kysoDiscussionsAssigneeEvent.team.sluglified_name
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.DISCUSSIONS_NEW_MENTION)
    async handleDiscussionsNewMention(kysoDiscussionsNewMentionEvent: KysoDiscussionsNewMentionEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed()
        activityFeed.user_id = kysoDiscussionsNewMentionEvent.user.id
        activityFeed.entity = EntityEnum.DISCUSSION
        activityFeed.entity_id = kysoDiscussionsNewMentionEvent.discussion.id
        activityFeed.action = ActionEnum.NEW_MENTION
        activityFeed.organization = kysoDiscussionsNewMentionEvent.organization.sluglified_name
        activityFeed.team = kysoDiscussionsNewMentionEvent.team.sluglified_name
        this.databaseService.insertActivityFeed(activityFeed)
    }
}
