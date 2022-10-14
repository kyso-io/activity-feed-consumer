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
        const activityFeed: ActivityFeed = new ActivityFeed()
        activityFeed.user_id = kysoOrganizationsCreateEvent.user.id
        activityFeed.entity = EntityEnum.ORGANIZATION
        activityFeed.entity_id = kysoOrganizationsCreateEvent.organization.id
        activityFeed.action = ActionEnum.CREATE
        activityFeed.organization = kysoOrganizationsCreateEvent.organization.sluglified_name
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.ORGANIZATIONS_UPDATE)
    async handleOrganizationsUpdated(kysoOrganizationsUpdateEvent: KysoOrganizationsUpdateEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed()
        activityFeed.user_id = kysoOrganizationsUpdateEvent.user.id
        activityFeed.entity = EntityEnum.ORGANIZATION
        activityFeed.entity_id = kysoOrganizationsUpdateEvent.organization.id
        activityFeed.action = ActionEnum.UPDATE
        activityFeed.organization = kysoOrganizationsUpdateEvent.organization.sluglified_name
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.ORGANIZATIONS_DELETE)
    async handleOrganizationsDeleted(kysoOrganizationsDeleteEvent: KysoOrganizationsDeleteEvent) {
        // const activityFeed: ActivityFeed = new ActivityFeed()
        // activityFeed.user_id = kysoOrganizationsDeleteEvent.user.id
        // activityFeed.entity = EntityEnum.ORGANIZATION
        // activityFeed.entity_id = kysoOrganizationsDeleteEvent.organization.id
        // activityFeed.action = ActionEnum.DELETE
        // activityFeed.organization = kysoOrganizationsDeleteEvent.organization.sluglified_name
        // this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.ORGANIZATIONS_ADD_MEMBER)
    async handleOrganizationsAddMember(kysoOrganizationsAddMemberEvent: KysoOrganizationsAddMemberEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed()
        activityFeed.user_id = kysoOrganizationsAddMemberEvent.user.id
        activityFeed.entity = EntityEnum.ORGANIZATION
        activityFeed.entity_id = kysoOrganizationsAddMemberEvent.organization.id
        activityFeed.action = ActionEnum.ADD_MEMBER
        activityFeed.organization = kysoOrganizationsAddMemberEvent.organization.sluglified_name
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.ORGANIZATIONS_UPDATE_MEMBER_ROLE)
    async handleOrganizationsUpdateMemberRole(kysoOrganizationsUpdateMemberRoleEvent: KysoOrganizationsUpdateMemberRoleEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed()
        activityFeed.user_id = kysoOrganizationsUpdateMemberRoleEvent.user.id
        activityFeed.entity = EntityEnum.ORGANIZATION
        activityFeed.entity_id = kysoOrganizationsUpdateMemberRoleEvent.organization.id
        activityFeed.action = ActionEnum.UPDATE_MEMBER_ROLE
        activityFeed.organization = kysoOrganizationsUpdateMemberRoleEvent.organization.sluglified_name
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.ORGANIZATIONS_REMOVE_MEMBER)
    async handleOrganizationsRemoveMember(kysoOrganizationsRemoveMemberEvent: KysoOrganizationsRemoveMemberEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed()
        activityFeed.user_id = kysoOrganizationsRemoveMemberEvent.user.id
        activityFeed.entity = EntityEnum.ORGANIZATION
        activityFeed.entity_id = kysoOrganizationsRemoveMemberEvent.organization.id
        activityFeed.action = ActionEnum.REMOVE_MEMBER
        activityFeed.organization = kysoOrganizationsRemoveMemberEvent.organization.sluglified_name
        this.databaseService.insertActivityFeed(activityFeed)
    }
}
