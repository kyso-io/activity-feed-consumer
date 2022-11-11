import {
    ActionEnum,
    ActivityFeed,
    EntityEnum,
    KysoEventEnum,
    KysoOrganizationsAddMemberEvent,
    KysoOrganizationsCreateEvent,
    KysoOrganizationsDeleteEvent,
    KysoOrganizationsRemoveMemberEvent,
    KysoOrganizationsUpdateEvent,
    KysoOrganizationsUpdateMemberRoleEvent,
} from '@kyso-io/kyso-model'
import { Controller } from '@nestjs/common'
import { EventPattern } from '@nestjs/microservices'
import { DatabaseService } from '../database/database.service'

@Controller()
export class OrganizationsController {
    constructor(private databaseService: DatabaseService) {}

    @EventPattern(KysoEventEnum.ORGANIZATIONS_CREATE)
    async handleTeamsCreated(kysoOrganizationsCreateEvent: KysoOrganizationsCreateEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed(
            kysoOrganizationsCreateEvent.user.id,
            kysoOrganizationsCreateEvent.organization.sluglified_name,
            null,
            EntityEnum.ORGANIZATION,
            kysoOrganizationsCreateEvent.organization.id,
            ActionEnum.CREATE,
            false,
            [],
        )
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.ORGANIZATIONS_UPDATE)
    async handleOrganizationsUpdated(kysoOrganizationsUpdateEvent: KysoOrganizationsUpdateEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed(
            kysoOrganizationsUpdateEvent.user.id,
            kysoOrganizationsUpdateEvent.organization.sluglified_name,
            null,
            EntityEnum.ORGANIZATION,
            kysoOrganizationsUpdateEvent.organization.id,
            ActionEnum.UPDATE,
            false,
            [],
        )
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.ORGANIZATIONS_DELETE)
    async handleOrganizationsDeleted(kysoOrganizationsDeleteEvent: KysoOrganizationsDeleteEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed(
            kysoOrganizationsDeleteEvent.user.id,
            kysoOrganizationsDeleteEvent.organization.sluglified_name,
            null,
            EntityEnum.ORGANIZATION,
            kysoOrganizationsDeleteEvent.organization.id,
            ActionEnum.DELETE,
            false,
            kysoOrganizationsDeleteEvent.user_ids,
        )
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.ORGANIZATIONS_ADD_MEMBER)
    async handleOrganizationsAddMember(kysoOrganizationsAddMemberEvent: KysoOrganizationsAddMemberEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed(
            kysoOrganizationsAddMemberEvent.user.id,
            kysoOrganizationsAddMemberEvent.organization.sluglified_name,
            null,
            EntityEnum.ORGANIZATION,
            kysoOrganizationsAddMemberEvent.organization.id,
            ActionEnum.ADD_MEMBER,
            false,
            [],
        )
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.ORGANIZATIONS_UPDATE_MEMBER_ROLE)
    async handleOrganizationsUpdateMemberRole(kysoOrganizationsUpdateMemberRoleEvent: KysoOrganizationsUpdateMemberRoleEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed(
            kysoOrganizationsUpdateMemberRoleEvent.user.id,
            kysoOrganizationsUpdateMemberRoleEvent.organization.sluglified_name,
            null,
            EntityEnum.ORGANIZATION,
            kysoOrganizationsUpdateMemberRoleEvent.organization.id,
            ActionEnum.UPDATE_MEMBER_ROLE,
            false,
            [],
        )
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.ORGANIZATIONS_REMOVE_MEMBER)
    async handleOrganizationsRemoveMember(kysoOrganizationsRemoveMemberEvent: KysoOrganizationsRemoveMemberEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed(
            kysoOrganizationsRemoveMemberEvent.user.id,
            kysoOrganizationsRemoveMemberEvent.organization.sluglified_name,
            null,
            EntityEnum.ORGANIZATION,
            kysoOrganizationsRemoveMemberEvent.organization.id,
            ActionEnum.REMOVE_MEMBER,
            false,
            [],
        )
        this.databaseService.insertActivityFeed(activityFeed)
    }
}
