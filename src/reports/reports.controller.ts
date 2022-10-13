import {
    ActionEnum,
    ActivityFeed,
    EntityEnum,
    KysoEventEnum,
    KysoReportsAuthorEvent,
    KysoReportsCreateEvent,
    KysoReportsDeleteEvent,
    KysoReportsNewVersionEvent,
    KysoReportsPinEvent,
    KysoReportsStarEvent,
    KysoReportsUpdateEvent,
} from '@kyso-io/kyso-model'
import { Controller } from '@nestjs/common'
import { EventPattern } from '@nestjs/microservices'
import { DatabaseService } from '../database/database.service'

@Controller()
export class ReportsController {
    constructor(private databaseService: DatabaseService) {}

    @EventPattern(KysoEventEnum.REPORTS_CREATE)
    async handleReportsCreate(kysoReportsCreateEvent: KysoReportsCreateEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed()
        activityFeed.user_id = kysoReportsCreateEvent.user.id
        activityFeed.entity = EntityEnum.REPORT
        activityFeed.entity_id = kysoReportsCreateEvent.report.id
        activityFeed.action = ActionEnum.CREATE
        activityFeed.organization = kysoReportsCreateEvent.organization.sluglified_name
        activityFeed.team = kysoReportsCreateEvent.team.sluglified_name
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.REPORTS_UPDATE)
    async handleReportsUpdate(kysoReportsUpdateEvent: KysoReportsUpdateEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed()
        activityFeed.user_id = kysoReportsUpdateEvent.user.id
        activityFeed.entity = EntityEnum.REPORT
        activityFeed.entity_id = kysoReportsUpdateEvent.report.id
        activityFeed.action = ActionEnum.UPDATE
        activityFeed.organization = kysoReportsUpdateEvent.organization.sluglified_name
        activityFeed.team = kysoReportsUpdateEvent.team.sluglified_name
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.REPORTS_NEW_VERSION)
    async handleReportsNewVersion(kysoReportsNewVersionEvent: KysoReportsNewVersionEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed()
        activityFeed.user_id = kysoReportsNewVersionEvent.user.id
        activityFeed.entity = EntityEnum.REPORT
        activityFeed.entity_id = kysoReportsNewVersionEvent.report.id
        activityFeed.action = ActionEnum.NEW_VERSION
        activityFeed.organization = kysoReportsNewVersionEvent.organization.sluglified_name
        activityFeed.team = kysoReportsNewVersionEvent.team.sluglified_name
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.REPORTS_DELETE)
    async handleReportsDelete(kysoReportsDeleteEvent: KysoReportsDeleteEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed()
        activityFeed.user_id = kysoReportsDeleteEvent.user.id
        activityFeed.entity = EntityEnum.REPORT
        activityFeed.entity_id = kysoReportsDeleteEvent.report.id
        activityFeed.action = ActionEnum.DELETE
        activityFeed.organization = kysoReportsDeleteEvent.organization.sluglified_name
        activityFeed.team = kysoReportsDeleteEvent.team.sluglified_name
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.REPORTS_PIN)
    async handleReportsPin(kysoReportsPinEvent: KysoReportsPinEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed()
        activityFeed.user_id = kysoReportsPinEvent.user.id
        activityFeed.entity = EntityEnum.REPORT
        activityFeed.entity_id = kysoReportsPinEvent.report.id
        activityFeed.action = ActionEnum.PIN
        activityFeed.organization = kysoReportsPinEvent.organization.sluglified_name
        activityFeed.team = kysoReportsPinEvent.team.sluglified_name
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.REPORTS_UNPIN)
    async handleReportsUnpin(kysoReportsUnpinEvent: KysoReportsPinEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed()
        activityFeed.user_id = kysoReportsUnpinEvent.user.id
        activityFeed.entity = EntityEnum.REPORT
        activityFeed.entity_id = kysoReportsUnpinEvent.report.id
        activityFeed.action = ActionEnum.UNPIN
        activityFeed.organization = kysoReportsUnpinEvent.organization.sluglified_name
        activityFeed.team = kysoReportsUnpinEvent.team.sluglified_name
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.REPORTS_PIN_GLOBAL)
    async handleReportsPinGlobal(kysoReportsPinGlobalEvent: KysoReportsPinEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed()
        activityFeed.user_id = kysoReportsPinGlobalEvent.user.id
        activityFeed.entity = EntityEnum.REPORT
        activityFeed.entity_id = kysoReportsPinGlobalEvent.report.id
        activityFeed.action = ActionEnum.PIN_GLOBAL
        activityFeed.organization = kysoReportsPinGlobalEvent.organization.sluglified_name
        activityFeed.team = kysoReportsPinGlobalEvent.team.sluglified_name
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.REPORTS_UNPIN_GLOBAL)
    async handleReportsUnpinGlobal(kysoReportsUnpinGlobalEvent: KysoReportsPinEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed()
        activityFeed.user_id = kysoReportsUnpinGlobalEvent.user.id
        activityFeed.entity = EntityEnum.REPORT
        activityFeed.entity_id = kysoReportsUnpinGlobalEvent.report.id
        activityFeed.action = ActionEnum.UNPIN_GLOBAL
        activityFeed.organization = kysoReportsUnpinGlobalEvent.organization.sluglified_name
        activityFeed.team = kysoReportsUnpinGlobalEvent.team.sluglified_name
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.REPORTS_STAR)
    async handleReportsStar(kysoReportsStarEvent: KysoReportsStarEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed()
        activityFeed.user_id = kysoReportsStarEvent.user.id
        activityFeed.entity = EntityEnum.REPORT
        activityFeed.entity_id = kysoReportsStarEvent.report.id
        activityFeed.action = ActionEnum.STAR
        activityFeed.organization = kysoReportsStarEvent.organization.sluglified_name
        activityFeed.team = kysoReportsStarEvent.team.sluglified_name
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.REPORTS_UNSTAR)
    async handleReportsUnstar(kysoReportsUnstarEvent: KysoReportsStarEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed()
        activityFeed.user_id = kysoReportsUnstarEvent.user.id
        activityFeed.entity = EntityEnum.REPORT
        activityFeed.entity_id = kysoReportsUnstarEvent.report.id
        activityFeed.action = ActionEnum.UNSTAR
        activityFeed.organization = kysoReportsUnstarEvent.organization.sluglified_name
        activityFeed.team = kysoReportsUnstarEvent.team.sluglified_name
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.REPORTS_ADD_AUTHOR)
    async handleReportsAddAuthor(kysoReportsAuthorEvent: KysoReportsAuthorEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed()
        activityFeed.user_id = kysoReportsAuthorEvent.author.id
        activityFeed.entity = EntityEnum.REPORT
        activityFeed.entity_id = kysoReportsAuthorEvent.report.id
        activityFeed.action = ActionEnum.ADD_AUTHOR
        activityFeed.organization = kysoReportsAuthorEvent.organization.sluglified_name
        activityFeed.team = kysoReportsAuthorEvent.team.sluglified_name
        this.databaseService.insertActivityFeed(activityFeed)
    }
}
