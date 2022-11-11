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
        const activityFeed: ActivityFeed = new ActivityFeed(
            kysoReportsCreateEvent.user.id,
            kysoReportsCreateEvent.organization.sluglified_name,
            kysoReportsCreateEvent.team.sluglified_name,
            EntityEnum.REPORT,
            kysoReportsCreateEvent.report.id,
            ActionEnum.CREATE,
            false,
            [],
        )
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.REPORTS_UPDATE)
    async handleReportsUpdate(kysoReportsUpdateEvent: KysoReportsUpdateEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed(
            kysoReportsUpdateEvent.user.id,
            kysoReportsUpdateEvent.organization.sluglified_name,
            kysoReportsUpdateEvent.team.sluglified_name,
            EntityEnum.REPORT,
            kysoReportsUpdateEvent.report.id,
            ActionEnum.UPDATE,
            false,
            [],
        )
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.REPORTS_NEW_VERSION)
    async handleReportsNewVersion(kysoReportsNewVersionEvent: KysoReportsNewVersionEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed(
            kysoReportsNewVersionEvent.user.id,
            kysoReportsNewVersionEvent.organization.sluglified_name,
            kysoReportsNewVersionEvent.team.sluglified_name,
            EntityEnum.REPORT,
            kysoReportsNewVersionEvent.report.id,
            ActionEnum.NEW_VERSION,
            false,
            [],
        )
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.REPORTS_DELETE)
    async handleReportsDelete(kysoReportsDeleteEvent: KysoReportsDeleteEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed(
            kysoReportsDeleteEvent.user.id,
            kysoReportsDeleteEvent.organization.sluglified_name,
            kysoReportsDeleteEvent.team.sluglified_name,
            EntityEnum.REPORT,
            kysoReportsDeleteEvent.report.id,
            ActionEnum.DELETE,
            false,
            [],
        )
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.REPORTS_PIN)
    async handleReportsPin(kysoReportsPinEvent: KysoReportsPinEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed(
            kysoReportsPinEvent.user.id,
            kysoReportsPinEvent.organization.sluglified_name,
            kysoReportsPinEvent.team.sluglified_name,
            EntityEnum.REPORT,
            kysoReportsPinEvent.report.id,
            ActionEnum.PIN,
            false,
            [],
        )
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.REPORTS_UNPIN)
    async handleReportsUnpin(kysoReportsUnpinEvent: KysoReportsPinEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed(
            kysoReportsUnpinEvent.user.id,
            kysoReportsUnpinEvent.organization.sluglified_name,
            kysoReportsUnpinEvent.team.sluglified_name,
            EntityEnum.REPORT,
            kysoReportsUnpinEvent.report.id,
            ActionEnum.UNPIN,
            false,
            [],
        )
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.REPORTS_PIN_GLOBAL)
    async handleReportsPinGlobal(kysoReportsPinGlobalEvent: KysoReportsPinEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed(
            kysoReportsPinGlobalEvent.user.id,
            kysoReportsPinGlobalEvent.organization.sluglified_name,
            kysoReportsPinGlobalEvent.team.sluglified_name,
            EntityEnum.REPORT,
            kysoReportsPinGlobalEvent.report.id,
            ActionEnum.PIN_GLOBAL,
            false,
            [],
        )
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.REPORTS_UNPIN_GLOBAL)
    async handleReportsUnpinGlobal(kysoReportsUnpinGlobalEvent: KysoReportsPinEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed(
            kysoReportsUnpinGlobalEvent.user.id,
            kysoReportsUnpinGlobalEvent.organization.sluglified_name,
            kysoReportsUnpinGlobalEvent.team.sluglified_name,
            EntityEnum.REPORT,
            kysoReportsUnpinGlobalEvent.report.id,
            ActionEnum.UNPIN_GLOBAL,
            false,
            [],
        )
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.REPORTS_STAR)
    async handleReportsStar(kysoReportsStarEvent: KysoReportsStarEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed(
            kysoReportsStarEvent.user.id,
            kysoReportsStarEvent.organization.sluglified_name,
            kysoReportsStarEvent.team.sluglified_name,
            EntityEnum.REPORT,
            kysoReportsStarEvent.report.id,
            ActionEnum.STAR,
            false,
            [],
        )
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.REPORTS_UNSTAR)
    async handleReportsUnstar(kysoReportsUnstarEvent: KysoReportsStarEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed(
            kysoReportsUnstarEvent.user.id,
            kysoReportsUnstarEvent.organization.sluglified_name,
            kysoReportsUnstarEvent.team.sluglified_name,
            EntityEnum.REPORT,
            kysoReportsUnstarEvent.report.id,
            ActionEnum.UNSTAR,
            false,
            [],
        )
        this.databaseService.insertActivityFeed(activityFeed)
    }

    @EventPattern(KysoEventEnum.REPORTS_ADD_AUTHOR)
    async handleReportsAddAuthor(kysoReportsAuthorEvent: KysoReportsAuthorEvent) {
        const activityFeed: ActivityFeed = new ActivityFeed(
            kysoReportsAuthorEvent.user.id,
            kysoReportsAuthorEvent.organization.sluglified_name,
            kysoReportsAuthorEvent.team.sluglified_name,
            EntityEnum.REPORT,
            kysoReportsAuthorEvent.report.id,
            ActionEnum.ADD_AUTHOR,
            false,
            [],
        )
        this.databaseService.insertActivityFeed(activityFeed)
    }
}
