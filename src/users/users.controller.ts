import {
    ActionEnum,
    ActivityFeed,
    KysoEvent,
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

    @EventPattern(KysoEvent.USERS_CREATE)
    async handleUsersCreated(kysoUsersCreateEvent: KysoUsersCreateEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed()
        activityFeed.user_id = kysoUsersCreateEvent.user.id
        activityFeed.entity = EntityEnum.USER
        activityFeed.entity_id = kysoUsersCreateEvent.user.id
        activityFeed.action = ActionEnum.REGISTER
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEvent.USERS_UPDATE)
    async handleUsersUpdated(kysoUsersUpdateEvent: KysoUsersUpdateEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed()
        activityFeed.user_id = kysoUsersUpdateEvent.owner.id
        activityFeed.entity = EntityEnum.USER
        activityFeed.entity_id = kysoUsersUpdateEvent.user.id
        activityFeed.action = ActionEnum.UPDATE
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEvent.USERS_DELETE)
    async handleUsersDeleted(kysoUsersDeleteEvent: KysoUsersDeleteEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed()
        activityFeed.user_id = kysoUsersDeleteEvent.owner.id
        activityFeed.entity = EntityEnum.USER
        activityFeed.entity_id = kysoUsersDeleteEvent.user.id
        activityFeed.action = ActionEnum.DELETE
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEvent.USERS_VERIFICATION_EMAIL)
    async handleUsersVerificationEmail(kysoUsersVerificationEmailEvent: KysoUsersVerificationEmailEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed()
        activityFeed.user_id = kysoUsersVerificationEmailEvent.user.id
        activityFeed.entity = EntityEnum.USER
        activityFeed.entity_id = kysoUsersVerificationEmailEvent.user.id
        activityFeed.action = ActionEnum.VERIFICATION_EMAIL
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEvent.USERS_RECOVERY_PASSWORD)
    async handleUsersRecoveryPassword(kysoUsersRecoveryPasswordEvent: KysoUsersRecoveryPasswordEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed()
        activityFeed.user_id = kysoUsersRecoveryPasswordEvent.user.id
        activityFeed.entity = EntityEnum.USER
        activityFeed.entity_id = kysoUsersRecoveryPasswordEvent.user.id
        activityFeed.action = ActionEnum.PASSWORD_CHANGE
        this.databaseService.insertActivityFeed(activityFeed)
    }
}
