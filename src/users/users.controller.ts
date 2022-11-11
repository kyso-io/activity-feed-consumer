import {
    ActionEnum,
    ActivityFeed,
    KysoEventEnum,
    KysoUsersCreateEvent,
    KysoUsersDeleteEvent,
    KysoUsersRecoveryPasswordEvent,
    KysoUsersUpdateEvent,
    KysoUsersVerificationEmailEvent,
} from '@kyso-io/kyso-model'
import { EntityEnum } from '@kyso-io/kyso-model/dist/enums/entity.enum'
import { Controller } from '@nestjs/common'
import { EventPattern } from '@nestjs/microservices'
import { DatabaseService } from '../database/database.service'

@Controller()
export class UsersController {
    constructor(private databaseService: DatabaseService) {}

    @EventPattern(KysoEventEnum.USERS_CREATE)
    async handleUsersCreated(kysoUsersCreateEvent: KysoUsersCreateEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed(kysoUsersCreateEvent.user.id, null, null, EntityEnum.USER, kysoUsersCreateEvent.user.id, ActionEnum.CREATE, false, [])
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.USERS_UPDATE)
    async handleUsersUpdated(kysoUsersUpdateEvent: KysoUsersUpdateEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed(kysoUsersUpdateEvent.user.id, null, null, EntityEnum.USER, kysoUsersUpdateEvent.user.id, ActionEnum.UPDATE, false, [])
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.USERS_DELETE)
    async handleUsersDeleted(kysoUsersDeleteEvent: KysoUsersDeleteEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed(kysoUsersDeleteEvent.user.id, null, null, EntityEnum.USER, kysoUsersDeleteEvent.user.id, ActionEnum.DELETE, false, [])
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.USERS_VERIFICATION_EMAIL)
    async handleUsersVerificationEmail(kysoUsersVerificationEmailEvent: KysoUsersVerificationEmailEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed(
            kysoUsersVerificationEmailEvent.user.id,
            null,
            null,
            EntityEnum.USER,
            kysoUsersVerificationEmailEvent.user.id,
            ActionEnum.VERIFICATION_EMAIL,
            false,
            [],
        )
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.USERS_RECOVERY_PASSWORD)
    async handleUsersRecoveryPassword(kysoUsersRecoveryPasswordEvent: KysoUsersRecoveryPasswordEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed(
            kysoUsersRecoveryPasswordEvent.user.id,
            null,
            null,
            EntityEnum.USER,
            kysoUsersRecoveryPasswordEvent.user.id,
            ActionEnum.PASSWORD_CHANGE,
            false,
            [],
        )
        this.databaseService.insertActivityFeed(activityFeed)
    }
}
