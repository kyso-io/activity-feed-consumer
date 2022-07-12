import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Db, MongoClient } from 'mongodb'
import { Constants } from '../constants'
import { DatabaseService } from './database.service'

@Module({
    providers: [
        DatabaseService,
        {
            provide: Constants.DATABASE_CONNECTION,
            inject: [ConfigService],
            useFactory: async (configService: ConfigService): Promise<Db> => {
                try {
                    const client = await MongoClient.connect(configService.get<string>('DATABASE_URI'), {
                        maxPoolSize: 10,
                    })
                    return client.db(client.options.dbName)
                } catch (e) {
                    throw e
                }
            },
        },
    ],
    exports: [Constants.DATABASE_CONNECTION, DatabaseService],
})
export class DatabaseModule {}
