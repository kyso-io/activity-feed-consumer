import {
    ActionEnum,
    ActivityFeed,
    EntityEnum,
    KysoEventEnum,
    KysoTeamsAddMemberEvent,
    KysoTeamsCreateEvent,
    KysoTeamsDeleteEvent,
    KysoTeamsRemoveMemberEvent,
    KysoTeamsUpdateEvent,
    KysoTeamsUpdateMemberRolesEvent,
} from '@kyso-io/kyso-model'
import { Controller } from '@nestjs/common'
import { EventPattern } from '@nestjs/microservices'
import { DatabaseService } from '../database/database.service'

@Controller()
export class TeamsController {
    constructor(private databaseService: DatabaseService) {}

    @EventPattern(KysoEventEnum.TEAMS_CREATE)
    async handleTeamsCreated(kysoTeamsCreateEvent: KysoTeamsCreateEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed()
        activityFeed.user_id = kysoTeamsCreateEvent.user.id
        activityFeed.entity = EntityEnum.TEAM
        activityFeed.entity_id = kysoTeamsCreateEvent.team.id
        activityFeed.action = ActionEnum.CREATE
        activityFeed.organization = kysoTeamsCreateEvent.organization.sluglified_name
        activityFeed.team = kysoTeamsCreateEvent.team.sluglified_name
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.TEAMS_UPDATE)
    async handleTeamsUpdated(kysoTeamsUpdateEvent: KysoTeamsUpdateEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed()
        activityFeed.user_id = kysoTeamsUpdateEvent.user.id
        activityFeed.entity = EntityEnum.TEAM
        activityFeed.entity_id = kysoTeamsUpdateEvent.team.id
        activityFeed.action = ActionEnum.UPDATE
        activityFeed.organization = kysoTeamsUpdateEvent.organization.sluglified_name
        activityFeed.team = kysoTeamsUpdateEvent.team.sluglified_name
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.TEAMS_DELETE)
    async handleTeamsDeleted(kysoTeamsDeleteEvent: KysoTeamsDeleteEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed()
        activityFeed.user_id = kysoTeamsDeleteEvent.user.id
        activityFeed.entity = EntityEnum.TEAM
        activityFeed.entity_id = kysoTeamsDeleteEvent.team.id
        activityFeed.action = ActionEnum.DELETE
        activityFeed.organization = kysoTeamsDeleteEvent.organization.sluglified_name
        activityFeed.team = kysoTeamsDeleteEvent.team.sluglified_name
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.TEAMS_ADD_MEMBER)
    async handleTeamsAddMember(kysoTeamsAddMemberEvent: KysoTeamsAddMemberEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed()
        activityFeed.user_id = kysoTeamsAddMemberEvent.user.id
        activityFeed.entity = EntityEnum.TEAM
        activityFeed.entity_id = kysoTeamsAddMemberEvent.team.id
        activityFeed.action = ActionEnum.ADD_MEMBER
        activityFeed.organization = kysoTeamsAddMemberEvent.organization.sluglified_name
        activityFeed.team = kysoTeamsAddMemberEvent.team.sluglified_name
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.TEAMS_UPDATE_MEMBER_ROLES)
    async handleTeamsUpdateMemberRoles(kysoTeamsUpdateMemberRolesEvent: KysoTeamsUpdateMemberRolesEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed()
        activityFeed.user_id = kysoTeamsUpdateMemberRolesEvent.user.id
        activityFeed.entity = EntityEnum.TEAM
        activityFeed.entity_id = kysoTeamsUpdateMemberRolesEvent.team.id
        activityFeed.action = ActionEnum.UPDATE_MEMBER_ROLE
        activityFeed.organization = kysoTeamsUpdateMemberRolesEvent.organization.sluglified_name
        activityFeed.team = kysoTeamsUpdateMemberRolesEvent.team.sluglified_name
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.TEAMS_REMOVE_MEMBER)
    async handleTeamsRemoveMember(kysoTeamsRemoveMemberEvent: KysoTeamsRemoveMemberEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed()
        activityFeed.user_id = kysoTeamsRemoveMemberEvent.user.id
        activityFeed.entity = EntityEnum.TEAM
        activityFeed.entity_id = kysoTeamsRemoveMemberEvent.team.id
        activityFeed.action = ActionEnum.REMOVE_MEMBER
        activityFeed.organization = kysoTeamsRemoveMemberEvent.organization.sluglified_name
        activityFeed.team = kysoTeamsRemoveMemberEvent.team.sluglified_name
        this.databaseService.insertActivityFeed(activityFeed)
    }
}
