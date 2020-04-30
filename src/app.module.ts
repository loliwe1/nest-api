import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ColumnsModule } from './column/column.module'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { User } from './users/user.entity';
import { Columns } from './column/column.entity'
import { CardModule } from './card/card.module';
import { Cards } from './card/card.entity'
import { CommentModule } from './comment/comment.module';
import { Comment } from './comment/comment.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      username: 'root',
      password: '',
      database: 'test1',
      entities: [User, Columns, Cards, Comment],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    ColumnsModule,
    CardModule,
    CommentModule
  ],

})
export class AppModule { }
