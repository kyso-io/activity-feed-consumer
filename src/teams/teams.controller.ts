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
        const activityFeed: ActivityFeed = new ActivityFeed(
            kysoTeamsCreateEvent.user.id,
            kysoTeamsCreateEvent.organization.sluglified_name,
            kysoTeamsCreateEvent.team.sluglified_name,
            EntityEnum.TEAM,
            kysoTeamsCreateEvent.team.id,
            ActionEnum.CREATE,
            false,
            [],
        )
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.TEAMS_UPDATE)
    async handleTeamsUpdated(kysoTeamsUpdateEvent: KysoTeamsUpdateEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed(
            kysoTeamsUpdateEvent.user.id,
            kysoTeamsUpdateEvent.organization.sluglified_name,
            kysoTeamsUpdateEvent.team.sluglified_name,
            EntityEnum.TEAM,
            kysoTeamsUpdateEvent.team.id,
            ActionEnum.UPDATE,
            false,
            [],
        )
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.TEAMS_DELETE)
    async handleTeamsDeleted(kysoTeamsDeleteEvent: KysoTeamsDeleteEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed(
            kysoTeamsDeleteEvent.user.id,
            kysoTeamsDeleteEvent.organization.sluglified_name,
            kysoTeamsDeleteEvent.team.sluglified_name,
            EntityEnum.TEAM,
            kysoTeamsDeleteEvent.team.id,
            ActionEnum.DELETE,
            false,
            kysoTeamsDeleteEvent.user_ids,
        )
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.TEAMS_ADD_MEMBER)
    async handleTeamsAddMember(kysoTeamsAddMemberEvent: KysoTeamsAddMemberEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed(
            kysoTeamsAddMemberEvent.userCreatingAction.id,
            kysoTeamsAddMemberEvent.organization.sluglified_name,
            kysoTeamsAddMemberEvent.team.sluglified_name,
            EntityEnum.TEAM,
            kysoTeamsAddMemberEvent.team.id,
            ActionEnum.ADD_MEMBER,
            false,
            [],
        )
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.TEAMS_UPDATE_MEMBER_ROLES)
    async handleTeamsUpdateMemberRoles(kysoTeamsUpdateMemberRolesEvent: KysoTeamsUpdateMemberRolesEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed(
            kysoTeamsUpdateMemberRolesEvent.userCreatingAction.id,
            kysoTeamsUpdateMemberRolesEvent.organization.sluglified_name,
            kysoTeamsUpdateMemberRolesEvent.team.sluglified_name,
            EntityEnum.TEAM,
            kysoTeamsUpdateMemberRolesEvent.team.id,
            ActionEnum.UPDATE_MEMBER_ROLE,
            false,
            [],
        )
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.TEAMS_REMOVE_MEMBER)
    async handleTeamsRemoveMember(kysoTeamsRemoveMemberEvent: KysoTeamsRemoveMemberEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed(
            kysoTeamsRemoveMemberEvent.user.id,
            kysoTeamsRemoveMemberEvent.organization.sluglified_name,
            kysoTeamsRemoveMemberEvent.team.sluglified_name,
            EntityEnum.TEAM,
            kysoTeamsRemoveMemberEvent.team.id,
            ActionEnum.REMOVE_MEMBER,
            false,
            [],
        )
        this.databaseService.insertActivityFeed(activityFeed)
    }
}
