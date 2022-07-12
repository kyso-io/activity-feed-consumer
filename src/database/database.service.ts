import { ActivityFeed } from '@kyso-io/kyso-model'
import { Inject, Injectable } from '@nestjs/common'
import * as moment from 'moment'
import { Db, InsertOneResult } from 'mongodb'
import { Constants } from '../constants'

@Injectable()
export class DatabaseService {
    constructor(
        @Inject(Constants.DATABASE_CONNECTION)
        private db: Db,
    ) {}

    private get activityFeedTable(): string {
        const currentMoment: moment.Moment = moment();
        return `${Constants.DATABASE_COLLECTION_ACTIVITY_FEED}-${currentMoment.year()}-${currentMoment.month() + 1}`
    }

    public async insertActivityFeed(activityFeed: ActivityFeed): Promise<InsertOneResult<ActivityFeed>> {
        activityFeed.created_at = new Date()
        const result: InsertOneResult<ActivityFeed> = await this.db.collection(this.activityFeedTable).insertOne(activityFeed)
        activityFeed.id = result.insertedId.toString()
        await this.db.collection(this.activityFeedTable).updateOne({ _id: result.insertedId }, { $set: { id: activityFeed.id } })
        return result
    }
}
